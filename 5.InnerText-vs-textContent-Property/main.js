// innerText, textContent

var headingElement = document.querySelector('.heading')

// lấy ra nội dung của text node
console.log(headingElement.innerText)
console.log(headingElement.textContent)

// Sửa nội dung text node
headingElement.innerText = 'New heading'
headingElement.textContent = 'New heading1'

// điểm khác nhau
// innerText: 
//  - khi lấy ra, nội dung lấy được giống như nội dung lấy được ở trên trình duyệt
//  - là thuộc tính của element node
//  - khi thêm vào sẽ tự chuyển đổi các kí tự thành mã HTML(enter thành br)
// textContent:
//  - lấy ra nội dung text thật của nó nằm trong DOM
//  - Thuộc tính tồn tại trên cả element node và tồn tại trên cả text node
//  - khi thêm vào sẽ lược bỏ các kí tự thừa(dấu cách, enter,...)
var headingElement1 = document.querySelector('.heading1')

console.log(headingElement1.innerText)
console.log(headingElement1.textContent)

headingElement.textContent = `// cả 2 chỉ có tác dụng thêm được text, không có tác dụng thêm element vào trong DOM
<i>New heading<i/>
`
headingElement.innerText = `
New heading<i/>
`