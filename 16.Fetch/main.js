// API ->Application progaming interface

// Cổng giao tiếp giữa các phần mềm

// Back-end (OK) -> API (URL) ->Fetch -> JSON/XML
// JSON.parse -> Javascript types
// Render ra giao diện với HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts'

// stream
fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })
    .catch(function(err) {
        alert('Có lỗi')
    })