const noPostBtn = document.getElementById('sell-button');
noPostBtn.addEventListener('click', event => {
  const isbn = event.target.parentNode.parentNode.dataset.isbn;
  window.location = `/create-post/${isbn}/`;
})