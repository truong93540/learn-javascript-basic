var boxElement = document.querySelector('.box')

// khi ta cần tìm việc gì mà không thấy thì console.log để tìm xem có thuộc tính mà tâ cần không
console.log([boxElement])// đây là object nhưng trình duyệt tự động chuyển sang dạng element node

/*  Những thuộc tính cần để ý
    clientHeight: kích thước chiều cao của element
    clientWidth: kích thước chiều rộng của element
    clientLeft, clientTop: vị trí so với vị trí tương đối của nó
    attributes: - trả về đối tượng NamedNodeMap giống array
                - đánh index cho các phần tử ở bên trong và có thuộc tính length để chỉ ra cái độ dài
                - các phần tử trong attributes trả về các attributes của element node
    autocapitalize: tự động thành viết hoa
    autofocus: tự động focus vào ô sau khi tải lại trang, ưu tiên khi làm dao diện đăng nhập
    baseURI: trả về URI hiện tại đang truy cập, lấy về domain + với cái path của nó
    childElementCount: đếm phần tử con là element
    childNodes: trả về Nodelist (cái khoảng cũng là cái textnode)
    children: trả về HTMLCollection chứa các element con
    classList: quản lí được các attribute class của 1 element
    draggable: được sử dụng khi làm nhiệm vụ kéo thả
    firstChild: lấy ra cái node đầu tiên
    firstElementChild: trả về thằng con là element đầu tiên
    hidden: quết định nó có ẩn hay không
    localName: là cái thẻ tag của element
    nextElementSibling: trả về cái thẻ liền kề
    nextSibling: trả về cái thằng node tiếp theo
    nodeName: trả về thẻ tag dạng chữ hoa
    nodeType: 
        text node = 3
        attribute node = 2
        element node = 1
    offsetParent: thể hiện xem hiện tại nó nằm trong thằng cha nào
    spellcheck: dùng để check chính tả
    tabIndex: dùng trong viêc sử dụng nút tab
*/