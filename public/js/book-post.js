const sellBtn = document.getElementById('sellBook-action-button');

sellBtn.addEventListener('click', event => {
    const isbn = event.target.parentNode.parentNode.dataset.isbn;
    window.location = '/create_post/' + isbn + '/';
})