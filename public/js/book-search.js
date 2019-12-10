const sellBtn = document.getElementsByClassName('sell-btn');

sellBtn.addEventListener('click', (event) => {
	const isbn = event.target.parentNode.parentNode.dataset.isbn;
	window.location = '/create-post/' + isbn + '/';
});
