var array = ['Javascript', 'PHP', 'Ruby'];


// cách cũ:
// var a = array[0];
// var b = array[1];
// var c = array[2];


// ES6
// var [a, b, c] = array
// console.log(a, b, c)

// var [a, , c] = array// không có b
// cons.log(a, c)

// var [a, ...rest] = array // sau toán tử ... là tên biến của lấy ra các phần còn lại
// console.log(rest);
// console.log(a)


var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}

// var { name, price, image } = course;// phải gọi đúng key và không cần lần lượt
// console.log(name, price, image)

// var { name, ...rest } = course
// console.log(name, rest)

// var { name, children: { name } } = course
// console.log(name)// tên name bị trùng lên sẽ gán cho thằng đằng sau

// lấy ra nhưng lại đổi tên
// var { name: parentName, children: { name:childName } } = course
// console.log(parentName)
// console.log(childName)

var { name, description = 'default description' } = course // gán giá trị mặc định khi không có
console.log(name)
console.log(description)


function logger(...params) {
    console.log(params)
}

logger(1, 2, 3, 4, 5, 6, 7, 8)