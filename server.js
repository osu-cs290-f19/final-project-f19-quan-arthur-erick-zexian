const axios = require('axios');
const express = require('express');
const fs = require('fs');
const exphbs = require('express-handlebars');
const path = require('path');
// const qs = require("qs");
// const getTermPublicKey = 'TnuOGEueZmOX36CyTXeyXwmYv0AwRDnR';
// const getTermSecretKey = 'pLLmhDmvLtWmvKl6';
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

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/create_post/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  res.sendFile(path.join(__dirname + '/public/create_post.html'));
});



  app.get('/create-post', (req, res) =>{
    /* Will need to add isbn data as a field to this */
    res.status(200).render('create_post'); 
  });

  var existingData = require("./data/postData.json");

  function getCount(req){
    var counter = 0;
    for(var i = 0; i < existingData.length; i++){
      if(existingData[i].isbn == req){
        counter++;
      }
    }
    return counter; 
  }

  app.post('/createPost', (req, res) =>{
    req.body.count = getCount(req.body.isbn);
    console.log(req.body);
    existingData.push(req.body);
    fs.writeFile('./data/postData.json', JSON.stringify(existingData, null, 2), (err) =>{
      if(err){
        console.log(err);
        return;
      }
      else{
        console.log("== postData.json has been written to.");
      }
    });    
    res.status(200).send();
  });

app.get('/search/:course', async (req, res) => {
  const course = req.params.course;
  const inputIndex = course.match(/[0-9]/).index;
  const major = course.substring(0, inputIndex).trim();
  const courseNumber = course.substr(inputIndex, 3);

  results = await getTextbook(major, courseNumber);
  res.status(200);
  res.render('home', {
    results: results
  });
})


app.listen(3000, () => console.log('server is running on port 3000..'));

// Get access token
function getTextbook(subject, courseNumber) {
  console.log('fetching textbooks');
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

// example object:
// {
//   id: '9781259731280',
//     type: 'textbook',
//       attributes: {
//     coverImageUrl: 'http://coverimages.verbacompete.com/no_image.jpg',
//       title: 'Discrete Math & Its Appl (Loose-Leaf)',
//         author: 'Rosen',
//           edition: 8,
//             copyrightYear: null,
//               priceNewUSD: 116.75,
//                 priceUsedUSD: 87.75
//   },
//   links: null
// }