var headingElement = document.getElementsByTagName('h1')[0]

console.log(headingElement)

// thêm vào atribute
headingElement.title = 'heading' // chỉ có khi đoạn js được thực thi chứ không thêm vào code
headingElement.id = 'heading1'
headingElement.className = 'heading2'
headingElement.setAttribute('href', 'heading3')// thêm atribute không hợp lệ với thẻ đã cho(mặc định của thẻ đó không hỗ trợ)

// lấy ra atribute
console.log(headingElement.title)// cách lấy ra này chỉ áp dụng với những atribute nằm trong thẻ nó hợp lệ
console.log(headingElement.getAttribute('href'))// cách lấy ra này có thể áp dụng được với atribute nằm trong thẻ hợp lệ


//VD:
var headingElementChild = document.querySelector('h2')

headingElementChild.setAttribute('class', 'color-red')

delete headingElementChild.removeAttribute('class')// xóa atribute

headingElementChild.setAttribute('class', 'color-blue')
