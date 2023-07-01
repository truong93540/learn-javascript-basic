// function logger(log) {
//     console.log(log);
// }
// logger('Message')


// const logger = function (log) {
//     console.log(log);
// }
// logger('Message')


// Arrow function
// const logger = (log) => {
//     console.log(log);
// }
// logger('Message')


// const sum = (a, b) => {
//     return a + b;
// }
// viết gọn hơn
// const sum = (a, b) => a + b;
// console.log(sum(2, 3))


// trừ trường hợp viết dấu ngoặc {}  (return object)
// const sum = (a, b) => {
//     return {
//         a: a,
//         b: b
//     }
// }
// Viết gọn hơn
// const sum = (a, b) => ({a: a,b: b})
// console.log(sum(2, 3))


// const logger = (log) => console.log(log);
// Viết gọn hơn
const logger = log => console.log(log);
logger('Message');


// const course = {
//     name: 'Javascript basic!',
//     getName: () => {// thằng arrow function không có context
//         return this; // context
//     }
// }
// console.log(course.getName())


// Arrow function không thể làm function constructor được
const Course = (name, price) => {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('Javascript', 100)

console.log(jsCourse)