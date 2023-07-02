// ... trước tên mảng là toán tử giải

// var array1 = ['Javascript', 'Ruby', 'PHP']

// var array2 = ['ReactJS', 'Dart']

// var array3 = [...array2, ...array1]

// console.log(array3)


// var object1 = {
//     name: 'Javascript'
// }

// var object2 = {
//     price: 1000
// }

// var object3 = {
//     ...object1,
//     ...object2
// }

// console.log(object3)


// var defaultConfig = {
//     api: 'https://domain-trang-khoa-hoc',
//     apiVersion: 'v1',
//     other: 'other'
//     //
//     //
//     //
// }

// var exercireConfig = {
//     ...defaultConfig,
//     api: 'https://domain-trang-bai-tap'
// }

// console.log(exercireConfig)


var array = ['Javascript', 'PHP', 'Ruby']

function logger(...rest) {
    console.log(rest)
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}

logger(...array)