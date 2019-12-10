const sellBtn = document.getElementsByClassName('sell-btn')[0];
sellBtn.addEventListener('click', event => {
  const isbn = event.target.parentNode.parentNode.dataset.isbn;
  window.location = '/create-post/' + isbn + '/';
})