const sellBtn = document.getElementsByClassName('sell-btn')[0];
const postList = document.getElementsByClassName("price");
const isbn = document.getElementById('post-header').dataset.isbn;

sellBtn.addEventListener('click', event => {
  window.location = '/create-post/' + isbn + '/';
});

for (i = 0; i < postList.length; i++) {
  postList[i].addEventListener("click", (event) => {
    const postID = event.target.parentNode.parentNode.parentNode.parentNode.dataset.postid;

    window.location = '/details/' + isbn + '/' + postID + '/';
  });
}

