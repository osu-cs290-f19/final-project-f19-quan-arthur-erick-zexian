const sellBtn = document.getElementById("sellBook-action-button");
const postPage = document.getElementById("book-link");


sellBtn.addEventListener("click", event => {
    const isbn = event.target.parentNode.parentNode.dataset.isbn;
    window.location = "/create_post/" + isbn + "/";
});

postPage.addEventListener("click", event => {
    const postID = event.target.postID;
    const isbn = event.target.parentNode.parentNode.dataset.isbn;
    window.location = "/details/" + "/" + isbn + "/" + postID + "/";
});

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