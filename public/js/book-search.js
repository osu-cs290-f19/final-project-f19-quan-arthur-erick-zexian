const title = document.getElementsByClassName('title');
const bookCount = document.getElementsByClassName('book-count');

for (i = 0; i < title.length; i++) {
	title[i].addEventListener('click', (event) => {
		const post = event.target.parentNode.parentNode.parentNode.parentNode;
		const isbn = event.target.parentNode.parentNode.parentNode.parentNode.dataset.isbn;
		window.location = '/details/' + isbn + '/';
	});
  // Adding book counts
  let count = bookCount[i].dataset.count;
  if (count === '0') {
    bookCount[i].classList.add('red');
    bookCount[i].innerHTML = 'No Books Available'
  } else if(count === '1') {
    bookCount[i].classList.add('yellow');
    bookCount[i].innerHTML = 'Last One Available'
  } else {
    bookCount[i].classList.add('green');
  }
}





