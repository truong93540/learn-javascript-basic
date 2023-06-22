
// DOM events

// 1. preventDefaul: ngăn chặn hành động mặc định của trình duyệt
// 2. stopPropagation

// nếu là trang f8 thì mới cho chuyển đi, nếu không thì không cho
var aElement = document.links; // lấy ra các thẻ có link

for(var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}