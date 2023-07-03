// Tagged template literals: là khái niệm sử dụng funciton qua cú pháp template literals

// Cách 1
// function highlight( [first, ...string ], ...rest) {
//     var result = rest.reduce((acc, value) => {
//         return [...acc, value, string.shift()] 
//     }, [first])
//     return result.join('')
// }

// Cách 2
function highlight() {
    var result = [...arguments[0]]
    var indexStart = 1
    for(var i=1; i<[...arguments[0]].length; i++) {
        result.splice(indexStart, 0, arguments[i])
        indexStart+=2
    }
    return result
}

var brand = 'F8'
var course = 'Javascript';

const html = highlight`Học lập trình ${course} tại ${brand}!`

console.log(html)
