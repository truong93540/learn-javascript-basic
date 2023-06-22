// thêm 1 element vào trong 1 element
// innerHTML 
// outerHTML

var boxElement = document.querySelector('.box')

boxElement.innerHTML = '<h1 title="Heading">New heading</h1>'// thêm 1 element node vào trong 1 element khác,
                                                            // thêm 1 text node vào trong element
                                                            // thêm 1 attribute vào trong 1 element
                                                            // Thay thế element ở bên trong

console.log(document.querySelector('h1').innerText)

console.log(document.querySelector('h1'))

console.log(boxElement.innerHTML)

console.log(boxElement.outerHTML)

boxElement.outerHTML = '<span>New heading 1</span>'// thay thế trực tiếp vào cái thẻ mà mình gọi tới

console.log(boxElement.innerHTML)// gọi lại cái phần đã được lưu ở trong bộ nhớ chứ nó bây h không tồn tại