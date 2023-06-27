/*
    Array methods:
        forEach(): sử dụng để duyệt qua từng phần tử của mảng
        every(): tất cả các phần tử trong mảng phải thuộc 1 điều kiện gì đó
        some(): một phần tử thỏa mãn điều gì đó
        find(): tìm kiếm phần tử thỏa mãn điều kiện
        filter(): tìm kiếm trả về tất cả các phần tử thỏa mãn
        map(): 
        reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 568
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 723
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 498
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

var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});

// console.log(course);

// var listCourse = courses.filter(function(course, index) {
//     return course.name === 'Ruby';
// });

// console.log(listCourse);


// Tự tạo ra phương thức some

// Array.prototype.some2 = function(callback) {
//     for(var index in this){
//         if(this.hasOwnProperty(index)){// kiểm tra key liền kề
//             if(callback(this[index], index)){
//                 return true
//             }
//         }    
//     }
//     return false
// }

// var isFree = courses.some2(function(course, index) {
//     return course.coin === 0;
// })

// console.log(isFree)

// Tự tạo ra phương thức every

// Array.prototype.every2 = function(callback) {
//     var result = true;
//     for(var index in this){
//         if(this.hasOwnProperty(index) && !callback(this[index], index, this)){
//             result = false;
//             break;
//         }
//     }
//     return result;
// }

// var isFree = courses.every2(function(course, index, arr) {
//     return course.coin === 0;
// })

// console.log(isFree)



// Array map() method
// function coursesHander(course, index, originArray) {// trả về cái gì thì nó lấy cái đó làm element
//     // console.log(courses);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray
//     }
// };

// var newCourses = courses.map(coursesHander);

// console.log(newCourses)

// HTML DOM

// Có 3 thành phần
//1. Element
//2. Attribute
//3. Text


// Node

// Javascript(cung cấp bộ phương tiện truy xuất vào HTML DOM): Brower | Server (NodeJS)

// Application programing interface

// Browser: HTML -> DOM -> WEB API (chỉ tồn tại ở trên môi trường web)



// Document object(đại diện cho toàn bộ website)
// Mỗi khi muốn truy xuất vào các thành phần nhỏ thì phải đi qua document

document.write('HELLO GUYS!') // thêm chuỗi vào vị trí mà mình link



//Object constructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var author = new User('Son', 'Dang', 'Avatar');
// var user = new User('Van', 'Truong', 'Avatar');

// author.title = 'Chia sẻ dạo tại F8';
// user.comment = 'đây là comment'

// console.log(author.getName())
// console.log(author.getName())



// String/Array includes() method - kiểm tra xem phần tử có nằm trong mảng hoặc chuỗi hay không

var title = 'Responsive web disign';

console.log(title.includes('Responsive', 0))// cái thứ 2 là vị trí tìm kiếm, không có thì = 0

var courses = ['Javascript', 'PHP', 'Dart'];

console.log(courses.includes('Javascript', 0))

