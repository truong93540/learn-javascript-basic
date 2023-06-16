var boxNode = document.querySelector('.box-1')

// công việc 1: Sử dụng tới 'boxNode'
// ...

// công việc 2: Sử dụng tới các li elements là con của '.box-1'
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('li'))
console.log(boxNode.getElementsByTagName('p'))
console.log(boxNode.querySelector('p'))