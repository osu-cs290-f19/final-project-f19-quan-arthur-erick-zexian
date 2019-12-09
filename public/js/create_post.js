/***************
 * JavaScript for create_post page
 * Erick Branner
 ***************/

/* Variables */
const NUM_FIELDS = 10;
const OPTIONAL_IDX = 5;
const IPT_CLASS = 'create-input';
const POST_TYPE = 'textbook';

const goBack = document.getElementById('create-back');
const createButton = document.getElementById('create-accept');

var reqISBN = '155';
var postInfo;
var postInfoArr = new Array(NUM_FIELDS);

/* Functions */

function allFields() {
	for (var i = 3; i < NUM_FIELDS; i++) {
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
    // console.log(postInfo);
	var newPost = {
        title: postInfo[0].innerText,
        author: postInfo[1].innerText,
        isbn: postInfo[2].innerText,
        conditon: postInfo[3].value,
        price: postInfo[4].value,
        meetupInfo: postInfo[5].value,
        description: postInfo[6].value,
        email: postInfo[7].value,
        phone: postInfo[8].value,
        imgURL: postInfo[9].value,
        count: 0
    };
	// console.log('== newPost object: ', newPost);
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
