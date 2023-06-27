// Event listener

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe 

//Lưu ý: sử dụng DOM event khi không muốn xóa, event listener khi sau này muốn hủy bỏ hoặc có nhiều công việc

//BT: 3 giầy giây say khi click không có chuyện gì xảy ra
var btn = document.getElementById('btn')

// btn.onclick = function() {
//     //Viec 1
//     console.log('Viec 1')

//     //Viec 2
//     console.log('Viec 2')

//     //Viec 3
//     console.log('Viec 3')
// }

// setTimeout( function() {
//     btn.onclick = function() {}// ghi đè
// }, 3000)

btn.addEventListener('click', function(e) {
    // console.log('event 1')
})

btn.addEventListener('click', function(e) {
    // console.log('event 2')
})

btn.addEventListener('click', function(e) {
    // console.log('event 3')
})

function viec1() {
    console.log('Viec 1')
}

function viec2(e) {
    console.log('Viec 2')
}

btn.addEventListener('click', viec1)

btn.addEventListener('click', viec2)

setTimeout(function() {
    btn.removeEventListener('click', viec1)// muốn gỡ phải dùng hàm riêng ở bên ngoài
}, 3000)

