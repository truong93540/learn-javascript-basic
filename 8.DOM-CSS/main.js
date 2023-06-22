var boxElement = document.querySelector('.box')

console.log(boxElement.style) // chỉ sử dụng trong css inline

//background-position -> backgroudPosition

boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'blue';

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})

console.log(boxElement.style.backgroundColor)