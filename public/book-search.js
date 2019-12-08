const sellBtn = document.getElementById('sell-btn');

sellBtn.addEventListener('click', event => {
  const isbn = event.target.parentNode.parentNode.dataset.isbn;
  window.location = '/create_post/' + isbn + '/';
})  
