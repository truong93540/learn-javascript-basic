// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinad',
//         cat2: {
//             name: 'Dinad2',
//             cat3: {
//                 name: 'Dina2'
//             }
//         }
//     }
// }

// obj['cat']?.['cat2']// có cách gọi object

// if(
//     // obj.cat &&
//     // obj.cat.cat2 &&
//     // obj.cat.cat2.cat3
//     obj.cat.cat2?.cat3// nghi ngờ có cat2 hay không
//     ) {
//     console.log(obj.cat.cat2.cat3.name)
// }


const obj = {
    getName(value) {
        console.log(value);
    }
}

obj.getName?.(123) // dùng cho function