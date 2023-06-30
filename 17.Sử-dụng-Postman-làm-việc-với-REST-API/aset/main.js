// Fetch

// - JSON server: API Server (Fake) Mock API --> OK
// - CRUD
//      - Create: Tạo mới -> POST
//      - Read: Lấy dữ liệu -> GET
//      - Update: Chỉnh sửa -> PUT / PATCH
//      - Delete: Xóa -> DELETE
// - Postman
// - Trong Postman 


function start() {
    var coursesApi = 'http://localhost:3000/course'
    showCourse(coursesApi)
    createCourse(coursesApi);
}

start()

function showCourse(courseApi) {
    fetch(courseApi)
        .then(function(course) {
            return course.json()
        })
        .then(function(courses) {
            let result =  courses.map(function(course) {
                return `
                    <li>
                        <h3>${course.courseName}</h3>
                        <span>${course.description}</span>
                        <br>
                        <button onclick="deleteCourse(${course.id})">Delete</button>
                        <button onclick="editCourse(${course.id})">Edit</button>
                    </li>
                `
            })
            document.getElementById('listCourses').innerHTML = result.join('')
        })
}

function createCourse(coursesApi) {
    var buttonElement = document.querySelector('.button')
    buttonElement.onclick = function() {
        var getInputName = document.getElementById('courseName').value
        var getInputDescription = document.getElementById('description').value
        var data = {
            courseName: getInputName,
            description: getInputDescription
        }
        fetch(coursesApi, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(function() {
            showCourse(coursesApi)
        })
    }

}

function deleteCourse(id) {
    fetch('http://localhost:3000/course' + '/' + id, {
        method: "DELETE"
    })
        .then(function() {
            alert("Deleted")
        })
        .then(function() {
            showCourse('http://localhost:3000/course')
        })
}

function editCourse(id) {
    var buttonEdit = document.querySelector('.eidt-button')
    var getDivBox = document.querySelector('.edit-box')
    getDivBox.classList.add('show')
    var divBox = new Promise(function(resolve) {
        return buttonEdit.onclick = function(even) {
            var getInputName = document.getElementById('edit-courseName').value
            var getInputDescription = document.getElementById('edit-description').value
            resolve({
                courseName: getInputName,
                description: getInputDescription
            })
        }
    })
    divBox
        .then(function(data) {
            fetch('http://localhost:3000/course' + '/' + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(function(data) {
                showCourse('http://localhost:3000/course')
            })
            .finally(function() {
                getDivBox.classList.remove('show')
            })
        })
}