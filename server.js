const axios = require('axios');
const express = require('express');
const fs = require('fs');
const exphbs = require('express-handlebars');
const path = require('path');

const getTextbookPublicKey = 'Yl8lgkJbZUoGo3A5GZGAmNZf5PCvM45n';
const getTextbookSecretKey = 'JLku2OLJXiVIQ4Wc';
const grantType = 'client_credentials';
const year = 2020;
const term = 'Winter';
let getTextbookAccessToken;
const params = new URLSearchParams();
const bodyParser = require('body-parser');
const app = express();
let results;
let textbookData = [];

var postData = JSON.parse(fs.readFileSync('./data/postData.json'));
var courseName = '';

app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main'
	})
);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public/html'));
app.use(express.static('public'));

app.get('/home', (req, res) => {
	fs.readFile(path.join(__dirname + '/data/courseData.json'), 'utf-8', (err, data) => {
		if (err) console.log(err);
		else {
			res.status(200).send(JSON.parse(data));
		}
	});
});


app.get('/post-created/:isbn', (req, res) => {
  const isbn = req.params.isbn;
	res.status(200);
	res.render('post-created', {
    isbn: isbn
  });
});

app.get('/details/:isbn/', (req, res) => {
	//   console.log("========");
	var matchedPosts = [];
	var tempReqData = postData;
	// console.log(tempReqData);
	const isbn = req.params.isbn;
	for (i = 0; i < tempReqData.length; i++) {
		if (isbn === tempReqData[i].isbn) {
			matchedPosts.push(tempReqData[i]);
		}
	}
	if (matchedPosts.length > 0) {
		res.status(200).render('post-list', {
			postList: matchedPosts,
			title: matchedPosts[0].title,
			author: matchedPosts[0].author,
			img: matchedPosts[0].imgURL,
      isbn: isbn
		});
	} else {
		res.status(404);
    res.render('no-post', {isbn: isbn});	}
});

app.get('/create-post/:isbn', (req, res) => {
	tempReqData = JSON.parse(fs.readFileSync('./data/textbookData.json'));
	var reqIdx = getReqDatIdx(req.params.isbn);
	const isbn = req.params.isbn;

	res.status(200).render('create_post', {
		courseName: courseName,
		isbn: isbn,
		title: tempReqData[reqIdx].attributes.title,
		author: tempReqData[reqIdx].attributes.author,
		imgURL: tempReqData[reqIdx].attributes.coverImageUrl
	});
});


app.post('/createPost', (req, res) => {
	req.body.count = getCount(req.body.isbn);
	postData.push(req.body);
	fs.writeFile('./data/postData.json', JSON.stringify(postData, null, 2), (err) => {
		if (err) {
			console.log(err);
			return;
		} 
	});
	res.status(200).send();
});

app.get('/search/:course/:courseName', async (req, res) => {
	const course = req.params.course;
	courseName = req.params.courseName;
	const inputIndex = course.match(/[0-9]/).index;
	const major = course.substring(0, inputIndex).trim();
	const courseNumber = course.substr(inputIndex, 3);

	results = await getTextbook(major, courseNumber);
  if (results.length == 0) {
    res.status(200);
    res.render('no-textbook');
    return;
  }

	fs.writeFile('./data/textbookData.json', JSON.stringify(results, null, 2), (err) => {
		if (err) {
			console.log(err);
			return;
		} 
	});

  results = getBookCounts(postData, results);
  
	res.status(200);
	res.render('book-search', {
		results: results,
    
	});
});

app.get('/sell', (red, res, next) => {
	res.render('sell');
});

app.get('/details/:isbn/:postID', (req, res, next) => {
	var dataFile = fs.readFileSync('./data/postData.json');
	var data = JSON.parse(dataFile);

	var index = -1;
	var toMatchID = req.params.postID;
	var toMatchISBN = req.params.isbn;

	var filteredPost = data.find(function(item, i) {
		if (item.isbn == toMatchISBN && item.count == toMatchID) {
			index = i;
			return i;
		}
	});

	//console.log(index, filteredPost);
	if (index != -1) {
		res.status(200).render('post-details', {
			imgSource: data[index].imgURL,
			bookTitle: data[index].title,
			ISBN: data[index].isbn,
			bookAuthor: data[index].author,
			bookPrice: data[index].price,
			bookCondition: data[index].condition,
			meetPreference: data[index].meetupInfo,
			contactEmail: data[index].email,
			contactPhone: data[index].phone,
			userDescription: data[index].description
		});
	} else {
		next();
	}
});

app.get('*', function(req, res) {
	res.status(404).render('404');
});

app.listen(3000, () => console.log('server is running on port 3000..'));


// Utility Functions

function getBookCounts(postData, results) {
  const tempPostData = postData;
  let tempResults = results;
  for (i = 0; i < tempResults.length; i++) {
    results[i].bookCount = 0;
    for (j = 0; j < tempPostData.length; j++) {
      if (tempResults[i].id === tempPostData[j].isbn) {
        results[i].bookCount++;
      }
    }   
  }
  return results
}

function getCount(req) {
	var counter = 0;
	for (var i = 0; i < postData.length; i++) {
		if (postData[i].isbn == req) {
			counter++;
		}
	}
	return counter;
}

/* This is specifically for our requested textbook data */
function getReqDatIdx(req) {
	for (var i = 0; i < tempReqData.length; i++) {
		if (req == tempReqData[i].id) {
			return i;
		}
	}
	return -1; /* We shouldn't ever get here */
}


function getTextbook(subject, courseNumber) {
	params.append('client_id', getTextbookPublicKey);
	params.append('client_secret', getTextbookSecretKey);
	params.append('grant_type', grantType);
	return axios
		.post('https://api.oregonstate.edu/oauth2/token', params)
		.then((res) => {
			getTextbookAccessToken = 'Bearer ' + res.data.access_token;
			return axios
				.get('https://api.oregonstate.edu/v1/textbooks', {
					params: {
						academicYear: year,
						term: term,
						subject: subject,
						courseNumber: courseNumber
					},
					headers: {
						Authorization: getTextbookAccessToken
					}
				})
				.then((res) => {
					return res.data.data;
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => console.log(err));
}
