// ClassList property

// add: thêm class vào element
// contains: kiểm tra xem 1 class có nằm ở trong element hay không
// remove: xóa bỏ 1 class vào element khỏi element
// toggle: thêm vào khi không có, có thì nó gỡ bỏ


var boxElement = document.querySelector('.box');

console.log(boxElement.classList.length) //lấy ra độ dài

console.log(boxElement.classList[0])

console.log(boxElement.classList.value) // trả về cái chuỗi nằm ở trong class

boxElement.classList.add('red') // thêm class

console.log(boxElement.classList.contains('red')) // kiểm tra 1 element có class hay không

//boxElement.classList.remove('red')

// setTimeout(() => {
//     boxElement.classList.remove('red')
// }, 3000)// xóa sau 3 giây

setInterval(() => {
    boxElement.classList.toggle('red')
}, 1000)