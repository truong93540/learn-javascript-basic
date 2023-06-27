
// DOM events
// 1. Attribute events
// 2. Assign event using the element node

/*
click: diễn ra khi người click vào element
change: diễn ra khi thay đổi (VD: khi cúng ta viết vào ô đăng nhập)
copy: khi chúng ta thực hiện hành động copy trên website
cut: khi chúng ta thực hiện hành động cut trên website
dbclick: khi dúng ta double click trên website
drag, drop: làm việc liên quan đến việc kéo thả
focus: khi tập chung vào 1 button hoặc là 1 thẻ input nào đó
keydown: khi bấm bàn phím xuống
keyup: khi nhấc bàn phím lên
mouseover: như thằng hover trong css hành vi đưa chuột vào
mouseout: di chuột ra khỏi cái vùng hover
mouseup: khi nhấc con chuột lên
mousedown: khi click con chuột xuống
resize: khi thay đổi kích thước của 1 element
scroll: khi chúng ta lắn chuột
*/

var headingElement = document.querySelector('.heading')

headingElement.onclick = function(event) {
    console.log(event)
}

// headingElement.onclick = function(event) {
//     console.log(event.target)// trả về chính cái thằng mà mình click vào
// }

// var h1Element = document.querySelectorAll('h1')

// for(var i = 0; i < h1Element.length; i++){
//     h1Element[i].onclick = function(e) {
//         console.log(e.target)
//     }
// }