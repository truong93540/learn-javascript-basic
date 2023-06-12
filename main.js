/*
    Array methods:
        forEach(): sử dụng để duyệt qua từng phần tử của mảng
        every(): tất cả các phần tử trong mảng phải thuộc 1 điều kiện gì đó
        some(): một phần tử thỏa mãn điều gì đó
        find(): tìm kiếm phần tử thỏa mãn điều kiện
        filter(): tìm kiếm trả về tất cả các phần tử thỏa mãn
        map()
        reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    }
];

// courses.forEach(function(course, index) {
//     console.log(index, course)
// })

// var isFree = courses.every(function(course, index) {
//     console.log(index)
//     return course.coin === 0;
// })

// console.log(isFree)

// var isFree = courses.some(function(course, index) {
//     console.log(index)
//     return course.coin === 0;
// })

// console.log(isFree)

// var course = courses.find(function(course, index) {
//     return course.name === 'Ruby';
// });

// console.log(course);

// var listCourse = courses.filter(function(course, index) {
//     return course.name === 'Ruby';
// });

// console.log(listCourse);


// Tự tạo ra phương thức some

Array.prototype.some2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){// kiểm tra key liền kề
            if(callback(this[index], index)){
                return true
            }
        }    
    }
    return false
}

var isFree = courses.some2(function(course, index) {
    return course.coin === 0;
})

console.log(isFree)