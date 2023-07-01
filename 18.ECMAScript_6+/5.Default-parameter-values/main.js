// Định nghĩ ra giá trị mặc định của tham số
// Được dùng khi định nghĩa ra tham số không bắt buộc phải nhập

// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Gia tri mac dinh!'
//     }
//     console.log(log)
// }

// function logger(log = 'Gia tri mac dinh!') {
//     console.log(log)
// }

function logger(log, type = 'log') {
    console[type](log)
}

logger('Message...', 'warn');