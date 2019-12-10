const sellBtn = document.getElementsByClassName('sell-btn');
const title = document.getElementsByClassName('title');

for (i = 0; i < sellBtn.length; i++) {
	sellBtn[i].addEventListener('click', (event) => {
		const isbn = event.target.parentNode.parentNode.dataset.isbn;
		window.location = '/create-post/' + isbn + '/';
	});
}

for (i = 0; i < title.length; i++) {
	title[i].addEventListener('click', (event) => {
		const post = event.target.parentNode.parentNode.parentNode.parentNode;
		const isbn = event.target.parentNode.parentNode.parentNode.parentNode.dataset.isbn;
		window.location = '/details/' + isbn + '/';
	});
}
