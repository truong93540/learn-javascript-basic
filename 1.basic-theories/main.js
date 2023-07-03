/* 
Làm việc với mảng:
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
]

var languages2 = [
    'Dart',
    'Ruby'
]
// console.log(languages.toString())// Chuyển sang dạng chuỗi

// console.log(languages.join(' - '))

// console.log(languages.pop()) // xóa phần tử ở cuối mảng và trả về phần tử đã xóa
// console.log(languages)

// console.log(languages.push('Dart', 'Java'))// thêm 1 hoặc nhiều phần tử vào cuối và trả về độ dài của mảng
// console.log(languages)

// console.log(languages.shift()) // Xóa phần tử ở đầu mảng và trả về phần tử đã xóa
// console.log(languages)

// console.log(languages.unshift('Dart', 'Java')) //thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng
// console.log(languages)

// languages.splice(1, 1, 'Dart') // tham số 1: xóa từ phần tử nào, tham số 2: xóa bao nhiêu phần tử, tham số 3: chèn vào vị trí 1
// console.log(languages)

// console.log(languages.concat(languages2))

// console.log(languages.slice(1, 2)) // cắt 1 vài element của mảng, tham số 1 và 2 là vị trí bắt đầu cắt và vị trí kết thúc cắt



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
        coin: 100
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

// var course = courses.find(function(course, index) {
//     return course.name === 'Ruby';
// });

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


// reduce
var i = 0;
// trong hàm này return cái gì thì biến tích trữ bằng cái đó
function coinHandler(accumulator, currentValue, currentIndex, originArray) { // accumulator là biến lưu trữ, currentValue là giá trị hiện tại
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy' : i,
        'Biến tích trữ ': accumulator,
        'Giá khóa học ':  currentValue.coin,
        'Tích trữ được ': total
    })
    return total
}

var totalCoin = courses.reduce(coinHandler, 0); // 0 là giá trị khởi tạo

console.log(totalCoin)
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

// var title = 'Responsive web disign';

// console.log(title.includes('Responsive', 0))// cái thứ 2 là vị trí tìm kiếm, không có thì = 0

// var courses = ['Javascript', 'PHP', 'Dart'];

// console.log(courses.includes('Javascript', 0))



// câu lệnh điều kiện if
// Các giá trị là false khi convert sang boolean:
// 0
// ''
// null
// undefined
// NaN
// false



// Arguments?

// function witeLog() {
//     console.log(arguments)// trả về các tham số được truyền vào
// }

// witeLog('Log 1', 'Log 2', 'Log 3')