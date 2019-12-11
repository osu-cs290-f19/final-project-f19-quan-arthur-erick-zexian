const sellBtn = document.getElementsByClassName('sell-btn')[0];
const postPage = document.getElementsByClassName("price")[0];

sellBtn.addEventListener('click', event => {
  const isbn = event.target.parentNode.parentNode.dataset.isbn;
  window.location = '/create-post/' + isbn + '/';
});

for (i = 0; i < postPage.length; i++) {
  postPage[i].addEventListener("click", (event) => {
    const postID = event.target.postID;
    // const isbn = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.isbn;
    // const isbn = event.target.parentNode.parentNode.dataset.isbn;
    // console.log(postID, isbn);
    window.location = '/details/' + isbn + '/' + postID + '/';
  });
}

function insertNewPost(imgURL, price, condition) {
  var postContext = {
    photoURL: imgURL,
    price: price,
    condition: condition,
  };
  var postHTML = Handlebars.templates.posts(postContext);
  var postContainer = document.getElementById('post');
  postContainer.insertAdjacentHTML('beforeend', postHTML);

}