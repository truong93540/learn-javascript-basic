// 1. Json là 1 định dạng dữ liệu (chuỗi) (không phải là kiểu dữ liệu)
// 2. Viết tắt của JavaScript Object Notation
// 3. JSON: Number, Boolean, Null, Array, Object

// Mã hóa / Giải mã
// Encode / decode
// Stringify: Từ Javascript types -> JSON
// Parse: Từ JSON -> Javascript types

var Json = '1';// thể hiện số 1 trong json
var Json1 = 'false'// thể hiện kiểu boolean
var Json2 = 'null'// thể hiện kiểu null
var Json3 = '["Javascript","PHP"]'// thể hiện dạng mảng
var Json4 = '{"name":"Van Truong","age":18}'// dạng object

console.log(typeof JSON.parse(Json))
console.log(JSON.parse(Json1))
console.log(JSON.parse(Json4))

console.log(JSON.stringify(true))
console.log(JSON.stringify([
    'Javascript',
    'PHP'
]))