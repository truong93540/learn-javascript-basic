// HTML DOM

// 1. Element: ID, class, tag
// CSS selector, HTML collection

// getElementById: trả về trực tiếp element
// getElementsByClassName: trả về HTMLCollection
// getElementsByTagName: trả về HTMLCollection
// querySelector: trả về trực tiếp element
// querySelectorAll: trả về NodeList
// HTML collection: trả về HTMLCollection


// 2. Attribute
// 3. Text


//mục tiêu lấy element
var headingNode = document.getElementById('heading')//cái này chỉ là cái object mô tả 1 cái node

console.log({
    element: headingNode
})

var headingNodes = document.getElementsByClassName('heading1')// Trả về HTML Collection có tính chất gần giống mảng, sau này dùng vòng lặp để lặp qua

console.log(headingNodes)

var decription = document.getElementsByTagName('p')
console.log(decription)

var headingNode1 = document.querySelector('.box .heading-2:nth-of-type(2)')
console.log(headingNode1)

var headingNode2 = document.querySelectorAll('.box .heading-2')
console.log(headingNode2)
console.log(headingNode2[0])// truy cập thằng đầu tiên

console.log(document.forms)
console.log(document.forms[0])
console.log(document.forms['form-2'])

var headingNode2 = document.querySelectorAll('.box .testForm')
console.log(document.forms.testForm2)

console.log(document.anchors)



