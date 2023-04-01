


class Post {
    constructor(title, author, body) {

        this.title = title;
        this.author = author;
        this.body = body;
    }

    addToRow() {
        if (this.title == '' || this.author == '' || this.body == '') {
            // alert('تمای فیلد ها الزامی هست');
            // Create div
            Post.showAlert('تمامی فیلد ها الزامی است', 'danger');

            return;
        }
        let x = document.createElement("TR");
        x.innerHTML = `<td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.body}</td>
        <td><i class="fas fa-times text-danger delete"></i></td>`;

        document.getElementById('post-list').append(x);

    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('body').value = '';
    }
    static showAlert(message, className) {
        const div = document.createElement('div');

        // Add classes
        div.className = `alert alert-${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));

        // Get parent
        const col = document.querySelector('.col-sm-8');

        // Get form
        const form = document.querySelector('#post-form');

        // Insert alert
        col.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);

    }
    static deleteRow(target) {
        target.parentElement.parentElement.remove();

    }
    /// متدهای مربوط به حافظه
    static getPosts() {
        let posts;
        if (localStorage.getItem('posts') === null) {
            posts = [];
        } else {
            posts = JSON.parse(localStorage.getItem('posts'));
        }

        return posts;
    }
    static displayPosts() {
        const posts = Post.getPosts();

        posts.forEach(function (post) {

            const tempPost = new Post(post.title, post.author, post.body);

            // Add book to UI
            tempPost.addToRow();
        });
    }
    static addPost(post) {
        const posts = Post.getPosts();

        posts.push(post);

        localStorage.setItem('posts', JSON.stringify(posts));
    }
    static removePost(title) {
        const posts = Post.getPosts();

        posts.forEach(function (post, index) {
            if (post.title === title) {
                posts.splice(index, 1);
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    }
}


// DOM Load Event
document.addEventListener('DOMContentLoaded', Post.displayPosts);



document.getElementById('send').addEventListener('click', function () {


    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let body = document.getElementById('body').value;



    const post = new Post(title, author, body);
    post.addToRow();
    Post.addPost(post);
    post.clearFields();



});

document.getElementById('post-list').addEventListener('click', function (e) {

    if (e.target.classList.contains('delete')) {


        // Delete book
        Post.deleteRow(e.target);

        // Remove from LS
        const tr = e.target.parentElement.parentElement;
        const title = tr.firstElementChild.textContent

        Post.removePost(title);

        // Show message
        Post.showAlert('پست حذف شد', 'success');

    }

    e.preventDefault();
});