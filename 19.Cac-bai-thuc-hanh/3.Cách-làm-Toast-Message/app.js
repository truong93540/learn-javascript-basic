const infomationMessage = {
    success: {
        heading: 'Success',
        description: 'Any one with access can view your invited visitors.',
        getIcon() {
            return `<svg style="fill: ${this.color}" class="listToastMessage__icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`
        } ,
        color: '#48d866',
        delay: '3000'
    },
    info: {
        heading: 'Info',
        description: 'Any one with access can view your invited visitors.',
        getIcon() {
            return `<svg style="fill: ${this.color}" class="listToastMessage__icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`
        },
        color: '#3086eb',
        delay: '4000'
    },
    warning: {
        heading: 'Warning',
        description: 'Any one with access can view your invited visitors.',
        getIcon() {
            return `<svg style="fill: ${this.color}" class="listToastMessage__icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`
        },
        color: '#ffc122',
        delay: '5000'
    }
}

function start() {
    function slipMessage() {
        const btn = document.querySelectorAll('.btn')
        const getListMessage = document.querySelector('.listToastMessage')
        let numberDelete = 0
        btn.forEach((value, index) => {
            value.onclick = (e) => {
                let valueModifier = value.classList[1].slice(4)
                const datainsert = document.createElement('div')
                datainsert.classList.add('itemToastMessage')
                datainsert.classList.add(`itemToastMessage-${numberDelete}`)
                datainsert.style.borderLeftColor = `${infomationMessage[valueModifier].color}`
                // console.log(datainsert)
                datainsert.innerHTML = `
                    <div class="listToastMessage__icon--box">
                        ${infomationMessage[valueModifier].getIcon()}
                    </div>
                    <div class="itemToastMessage__content itemToastMessage__content--success">
                        <span class="content__success--heading">${infomationMessage[valueModifier].heading}</span>
                        <p class="content__success--description">${infomationMessage[valueModifier].description}</p>
                    </div>
                    <div class="listToastMessage__icon--close--box">
                        <svg class="listToastMessage__icon--close" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                `
                getListMessage.appendChild(datainsert);
                let itemToastMessage = document.querySelector(`.itemToastMessage-${numberDelete}`)
                // console.log(itemToastMessage)
                itemToastMessage.style.animation = 'slip ease 0.3s'
                document.querySelector(`.itemToastMessage-${numberDelete} .listToastMessage__icon--close--box`).onclick = (e) => {
                    deleteToastMessage()
                }
                setTimeout(() => {
                    deleteToastMessage()
                }, Number(infomationMessage[valueModifier].delay) + 300)
                function deleteToastMessage() {
                    itemToastMessage.style.animation = 'hiden ease 0.6s'
                    itemToastMessage.style.animationFillMode = 'forwards'
                    setTimeout(() => {
                        itemToastMessage.remove()
                        // console.log(infomationMessage[valueModifier].delay)
                    }, 600)
                }
                numberDelete++
            }
        })
    }

    slipMessage()
}

start()