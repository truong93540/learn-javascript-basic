// Promise
// Sycn: đồng bộ(viết trước chạy trước, viết sau chạy sau)
// Asycn: bất đồng bộ


// Các thằng dùng cho Asycn:
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading
// request animation frame

// Callback

// sleep
// setTimeout(function() {
//     console.log(1);
// }, 1000)

// console.log(2)


// setTimeout(function() {
//     console.log(1);
// }, 2000)

// setTimeout(function() {
//     console.log(2);
// }, 1000)



// Callback hell
// Pyramid of doom

// setTimeout(function() {
//     console.log(1);// Việc 1
//     setTimeout(function() {
//         console.log(2);// Việc 2
//         setTimeout(function() {
//             console.log(3);// Việc 3
//             setTimeout(function() {
//                 console.log(4);// Việc 4
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//Promise (concept)

// 1. new Promise
// 2. Excutor

// 1. Pending
// 2. Fulfilled
// 3. Rejected

// var promise = new Promise(
//     // Excutor
//     function(resolve, reject) {
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: reject()

//         // Fake call API
//         resolve([
//             {
//                 id: 1,
//                 name: 'Javascript'
//             }
//         ])
//         reject('Co loi!')
//     }
// )

// promise 
//     .then(function(courses){// khi thành công thì nó sẽ callback
//         // console.log(courses)
//     })
//     .catch(function(error) {// khi thất bại thì nó sẽ callback
//         // console.log(error)
//     })
//     .finally(function() {// khi thực hiện xong
//         // console.log('Done!')        
//     })
    
//Promise (chain)

// var promise1 = new Promise(
//     function(resolve, reject) {
//         resolve()
//     }
// )

// promise1
//     .then(function(){
//         return 1//kết quả trả về của function đằng trước lại là tham số của function đằng sau
//     })
//     .then(function(data){// muốn thực hiện thì phải đợi kết quả của thằng đằng trước
//         // console.log(data)
//         return 2
//     })
//     .then(function(data){
//         // console.log(data)
//         return 3
//     })
//     .then(function(data){
//         // console.log(data)
//     })
//     .catch(function(error) {
//         // console.log(error)
//     })
//     .finally(function() {
//         // console.log('Done!')        
//     })



// var promise2 = new Promise(
//     function(resolve, reject) {
//         resolve()
//     }
// )
    
// promise2
//     .then(function(){//nếu không return promise thì sẽ chạy luông thằng bên dưới
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1, 2, 3])
//             }, 3000)
//         })
//     })
//     .then(function(data){
//         // console.log(data)
//     })
//     .catch(function(error) {
//         // console.log(error)
//     })
//     .finally(function() {
//         // console.log('Done!')
//     })



// var data = 1
// var time = 1000;
// var promise3 = new Promise(
//     function(resolve, reject) {
//         setTimeout(function(){
//             resolve(console.log(data))
//         }, time)
//     }
// )

// promise3
//     .then(function() {
//         return new Promise(
//             function(resolve) {
//                 setTimeout(function(){
//                     resolve(
//                         2, console.log(2)
//                     )
//                 }, time)
//             }
//         )
//     })
//     .then(function(data) {
//         return new Promise(
//             function(resolve) {
//                 setTimeout(function(){
//                     resolve(
//                         ++data, console.log(data)
//                     )
//                 }, time)
//             }
//         )
//     })
//     .then(function(data) {
//         return new Promise(
//             function(resolve) {
//                 setTimeout(function(){
//                     resolve(
//                         ++data, console.log(data)
//                     )
//                 }, time)
//             }
//         )
//     })
//     .catch(function(error) {
//         console.log('Có Lỗi')
//     })
//     .finally(function() {
//         // console.log('Done!')
//     })


//cách anh sơn làm
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000)
//     })

    

// Promise methods (resolve, reject, all)
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {// nếu giữa đường bị reject thì sẽ không chạy xuống những chỗi còn lại
//             reject('Co lỗi!')
//         })
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000)
//     })
//     .catch(function(err) {
//         console.log(err)
//     })


// var promise = Promise.resolve('Success!')

// promise
//     .then(function(result) {
//         console.log('result: ', result)
//     })
//     .catch(function(err) {
//         console.log('err: ', err)
//     })


// var promise = Promise.reject('Success!')

// promise
//     .then(function(result) {
//         console.log('result: ', result)
//     })
//     .catch(function(err) {
//         console.log('err: ', err)
//     })


// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     }, 2000)
// })

// var promise2 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([2, 3])
//         }, 5000)
//     }
// )

// Promise.all([promise1, promise2])
//     .then(function(result) {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2))
//     })


// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     }, 2000)
// })

// var promise2 = new Promise(
//     function(resolve, reject) {
//         reject('Co loi')
//     }
// )

// Promise.all([promise1, promise2])
//     .then(function(result) {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2))
//     })
//     .catch(function(err) {
//         console.log(err)
//     })



// Promise example

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
    //,...
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'OK rồi anh ơi'
    }
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// từ user_id lấy ra tên user tương ứng

// Fake API

// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM

// Tự tay code (c1 sử dụng callback)
// function getComment(comments, user) {
//     var listComment = [];
//     var userList = comments.map(function(comment, index) {
//         return {
//             user_id: comment.user_id,
//             content: comment.content
//         }
//     })
//     for(var i = 0; i < userList.length; i++){
//         var userName = user.find(function(user) {
//             return user.id === userList[i].user_id
//         })
//         listComment.push(`<li>${userName.name}: ${userList[i].content}</li>`)
//     }
//     var HTMLComment = document.querySelector('ul')
//     for(var index in listComment){
//         setTimeout(function() {
//             HTMLComment.innerHTML = listComment.join('')
//         }, 1000)
//     }
// }

// getComment(comments, users)


// Cách anh Sơn làm:

// Callback hell
// Promise hell

// function getComment() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments)
//         }, 1000)
//     })
// }

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id)
//         })
//         setTimeout(function() {
//             resolve(result)
//         }, 1000)
//     })
// }

// getComment()
//     .then(function(comment) {
//         var userIds = comment.map(function(comment) {
//             return comment.user_id
//         })
//         return getUsersByIds(userIds)
//             .then(function(users) {
//                 return {
//                     user: users,
//                     comments: comments
//                 }

//             })
//     })
//     .then(function(data) {
//         var commentBlock = document.getElementById('comment-block')
//         var html = ''
//         data.comments.forEach(function(comment) {
//             var user = data.user.find(function(user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         })
//         commentBlock.innerHTML = html
//     })


// Cách mình tự làm bằng promise

var getComment = new Promise(function(resolve) {
    return setTimeout(function() {
        resolve(comments)
    }, 1000)
})
getComment
    .then(function(listComment) {
        var listUser_id = []
        listComment.forEach(function(data) {
            listUser_id.push(data.user_id)
        })
        return listUser_id
    })
    .then(function(data) {
        var listUser = users.filter(function(user) {
            return data.includes(user.id)
        })
        return listUser
    })
    .then(function(data) {
        let result = [];
        comments.forEach(function(comment) {
            var Name = data.find(function(user) {
                return comment.user_id === user.id
            })
            result.push(`<li>${Name.name}: ${comment.content}</li>`)
        })
        console.log(result)
        var getCommentById = document.getElementById('comment-block')
        console.log(getCommentById)
        getCommentById.innerHTML = result.join('')
    })
