// function Course(name, price) {// constructor function khi nhiều nên bị rối
//     this.name = name;
//     this.price = price;

//     this.getName = function() {
//         return this.name;
//     }

//     const isSuccess = false;
// }

// làm nhiệm vụ tương tự constructor funciton
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    getName() {
        return this.price
    }
    getPrice() {
        const isSuccess = false;
    }
    run() {
        if(true) {
            isSuccess = true
        }
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse)
console.log(console)