/***************
 * JavaScript for create_post page
 * Erick Branner
 ***************/

/* Variables */
const NUM_FIELDS = 10;
const OPTIONAL_IDX = 6;
const IPT_CLASS = 'create-input';
const POST_TYPE = 'textbook';

const goBack = document.getElementById('create-back');
const createButton = document.getElementById('create-accept');

var reqISBN = '155';
var postInfo;
var postInfoArr = new Array(NUM_FIELDS);

/* Functions */

function allFields() {
	for (var i = 3; i < NUM_FIELDS - 1; i++) {
		if (i != OPTIONAL_IDX) {
			if (document.getElementsByClassName(IPT_CLASS)[i].value == '') {
				return false;
			}
		}
	}
	return true;
}

function storeInput() {
	postInfo = document.getElementsByClassName(IPT_CLASS);
	for (var i = 0; i < NUM_FIELDS - 1; i++) {
		postInfoArr[i] = postInfo[i].value;
	}
	postInfoArr[NUM_FIELDS - 1] = reqISBN;
	console.log(postInfoArr);
	console.log('== Input stored in postInfoArr');
	var newPost = {
		title: postInfoArr[0],
		author: postInfoArr[1],
		condition: postInfoArr[2],
		price: postInfoArr[3],
		meetupInfo: postInfoArr[4],
		description: postInfoArr[5],
		email: postInfoArr[6],
		phone: postInfoArr[7],
		imgURL: postInfoArr[8],
		isbn: reqISBN,
		count: 0
	};
	console.log('== newPost object: ', newPost);
	axios
		.post('/createPost', newPost)
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
	return;
}

/* Event Listeners */

goBack.addEventListener('click', () => {
	console.log('== Go back clicked');
  window.history.back();
});

createButton.addEventListener('click', () => {
	// console.log('== Create clcked');
	if (!allFields()) {
		alert('Please provide input for all fields');
	} else {
		storeInput();
		window.location = '/post-created';
	}
});
