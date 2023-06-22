
// DOM events

// 1. Input / select
// 2. Key up / down


// lấy ra value của input
var inputValue;
var inputElement = document.querySelector('input[type="text"]')

inputElement.onchange = function(e) {//diễn ra khi thay đổi value, chạy khi bỏ focus
    // console.log(e.target.value)
}

inputElement.oninput = function(e) {// gõ đến đâu ăn đến đó luôn
    // console.log(e.target.value)
    inputValue = e.target.value
}

var checkboxElement = document.querySelector('input[type="checkbox"]')

checkboxElement.onchange = function(e) {
    console.log(e.target.checked)
}

var selectElement = document.querySelector('select')

selectElement.onchange = function(e) {
    console.log(e.target.value)
}

inputElement.onkeydown = function(e) {
    // console.log(e.target.value)
}

inputElement.onkeyup = function(e) {
    // console.log(e.target.value)
}

inputElement.onkeyup = function(e) {
    console.log(e.which)// lấy ra cái mã số kí tự của bàn phím

    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

document.onkeydown = function(e) {
    console.log(e)
    switch(e.which) {
        case 27:
            console.log('Exit')
            break;
        case 13:
            console.log('SEEN CHAT')
    }
}


