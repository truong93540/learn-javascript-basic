
// DOM events

// 1. preventDefaul: ngăn chặn hành động mặc định của trình duyệt
// 2. stopPropagation: ngăn chặn sự kiện nổi bọt

// nếu là trang f8 thì mới cho chuyển đi, nếu không thì không cho
var aElement = document.links; // lấy ra các thẻ có link

for(var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul')

ulElement.onmousedown = function(e) {
    e.preventDefault()
}

ulElement.onclick = function(e) {
    console.log(e.target)
}

var divClick = document.querySelector('div')

divClick.onclick = function(e) {
    console.log('DIV')
}

var buttonClick = document.querySelector('button')

buttonClick.onclick = function(e) {
    e.stopPropagation();
    console.log('button')
}