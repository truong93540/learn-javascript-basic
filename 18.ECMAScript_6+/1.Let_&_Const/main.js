// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment

// Code block: if else, loop, {},...

// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến đó: Const
// Khi cần gán lại cho biến: Let





// if(true){
//     var course = 'Javascript basic';
// }

// console.log(course)


// {
//     let course = 'Javascript basic'
// }

// console.log(course)// không truy cập được nữa


// {
//     const course = 'Javascript basic'
// }

// console.log(course)// không truy cập được nữa


// cả 3 thằng bên trong block đều có thể truy cập được
// if(true){
//     var course = 'Javascript basic';
//     {
//         {
//             console.log(course)
//         }
//     }
// }

// if(true){
//     const course = 'Javascript basic';
//     {
//         {
//             console.log(course)
//         }
//     }
// }

// if(true){
//     let course = 'Javascript basic';
//     {
//         {
//             console.log(course)
//         }
//     }
// }


// if(true){
//     const course = 'Javascript basic';
//     {
//         {
//             const course = 123
//             console.log(course)// ưu tiên ở trong cái block gần nhất
//         }
//     }
// }


// a = 1;
// var a;// có hỗ trợ Hosting (đưa lên đầu)
// console.log(a)


// a = 1;
// let a;// không hỗ trợ Hosting (đưa lên đầu)
// console.log(a)


// a = 1;
// const a;// không hỗ trợ Hosting (đưa lên đầu)
// console.log(a)


// const a = 1;// không thể sử dụng toán tử gán
// a = 100;
// console.log(a)


const a = {
    name: 'Javascript'
}
a.name = 'PHP';
console.log(a.name)