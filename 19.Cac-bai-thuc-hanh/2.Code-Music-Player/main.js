const listSong = [
    {
        name: 'VIETNAM - My Home',
        author: 'Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/3/9/d/b39d557a90d6e08307de893ca47b1797.jpg',
        song: './audio/vietnammyhome.mp3'
    },
    {
        name: 'Thị Mầu',
        author: 'Hòa Minzy, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/b/5/7/5b57e6c61848cfed2fa19cd31b293898.jpg',
        song: './audio/thimau.mp3'
    },
    {
        name: 'Túy Âm',
        author: 'Xesi, Masew, Nhật Nguyễn',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/f/9/f9c0475ec02716554fba3f63e5b4ac37_1504991428.jpg',
        song: './audio/tuyam.mp3'
    },
    {
        name: 'Ái Nộ',
        author: 'Yến Tattoo, Masew, Great',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/b/1/c/6b1c9deca228d456e63e1c9c0bfd1c28.jpg',
        song: './audio/aino.mp3'
    },
    {
        name: 'Buồn Của Anh',
        author: 'K-ICM, Đạt G, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/covers/c/0/c0827e5f2c898fc987e7883151b0476a_1513651595.png',
        song: './audio/buoncuaanh.mp3'
    },
    {
        name: 'Lửng Lơ',
        author: 'Masew, B Ray, RedT, Ý Tiên',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/3/0/3/3/30332432e55a395202949715ca0162c1.jpg',
        song: './audio/lunglo.mp3'
    },
    {
        name: 'Độ Tộc 2',
        author: 'Do Mixi, Pháo, Phúc Du, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/e/6/2/fe6231fdfee5449a51e6ed5741ace3c8.jpg',
        song: './audio/dotoc2.mp3'
    },
    {
        name: 'Phố Đã Lên Đèn (Masew Remix)',
        author: 'Masew, Huyền Tâm Môn, Great',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/8/d/978d12830c18df95c26e93e658019166.jpg',
        song: './audio/phodalenden.mp3'
    },
    {
        name: 'Cưới Thôi 2',
        author: 'Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/7/f/3/77f31ae3da7b0e3bd6c273633499a1f3.jpg',
        song: './audio/cuoithoi2.mp3'
    },
    {
        name: 'Kém Duyên',
        author: 'Rum, NIT, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/8/b/8bdfda3e88db5f9b6bf2ff7d1757e989_1510654845.jpg',
        song: './audio/kemduyen.mp3'
    }
]

const headerSong = document.querySelector('.heading--playing')
const imgSong = document.querySelector('.playing-image-box')
let startdeg = 0; // Góc quay ban đầu
const btnPlayPausee = document.querySelector('.btn-main')
const btnPlay = document.querySelector('.btn-main .play')
const btnPause = document.querySelector('.btn-main .pause')
let positionSongDefault = 0
let linkSong = document.querySelector('.link-song')
const getListAudio = document.querySelector('.listSongs')




function start() {
    let i = 0;

    function getAudio(positionSong) {
        linkSong.src = `${listSong[positionSong].song}`
        headerSong.textContent = `${listSong[positionSong].name}`
        imgSong.innerHTML = `<img class="playing-image-item" src="${listSong[positionSong].img}" alt=""></img>`
    }
    
    function showListAudio() {
        const listAudio = listSong.map((thisSong, index) => {
            return `
                    <div class="itemSong itemSong-${index}">
                        <div class="itemSong__image">
                            <img src="${thisSong.img}" alt="">
                        </div>
                        <div class="itemSong__content">
                            <h3>${thisSong.name}</h3>
                            <span>${thisSong.author}</span>
                        </div>
                        <svg class="icon-option" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                    </div>
                `
        })
        getListAudio.innerHTML = listAudio.join('')
    }
    
    function getPlay() {
        btnPlayPausee.onclick = event => {
            if(linkSong.paused) {
                linkSong.play()
            }else{
                linkSong.pause()
            }
        }
    }
    
    function startRotation() {
        intervalId = setInterval(() => {
            startdeg += 0.5;
            imgSong.style.transform = `rotate(${startdeg}deg)`;
        }, 25);
    }
    
    function convertSecondsToMinutes(seconds) {
        let minutes = Math.floor(seconds / 60).toFixed(0); // Lấy phần nguyên phút
        let remainingSeconds = (seconds % 60).toFixed(0); // Lấy phần dư giây
    
        // Định dạng chuỗi cho phút và giây
        let formattedMinutes = minutes.toString().padStart(2, '0'); // Đảm bảo có 2 chữ số
        let formattedSeconds = remainingSeconds.toString().padStart(2, '0'); // Đảm bảo có 2 chữ số
    
        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    function conTrolInputSong() {
        const conTrolSong = document.querySelector('.control-song')
        const clockElementNow = document.querySelector('.time-now')
        const clockElementEnd = document.querySelector('.time-end')
        let itemSongHover = document.querySelector(`.itemSong-${i}`)
        let itemSongHeadingHover = document.querySelector(`.itemSong-${i} .itemSong__content`)
        let itemSongAuthorHover = document.querySelector(`.itemSong-${i} .itemSong__content span`)
        let itemSongOptionHover = document.querySelector(`.itemSong-${i}.itemSong .icon-option`)


        linkSong.onloadeddata = function(e) {
            let songRunning = document.querySelector('.songRunning');
            let itemSongChange = document.querySelector(`.itemSong-${i}`)

            itemSongHover.classList.remove('itemSong--hover')
            itemSongHeadingHover.style.color = '#333'
            itemSongAuthorHover.style.color = '#918cad'
            itemSongOptionHover.style.fill = '#8884b6' 

            itemSongHeadingHover = document.querySelector(`.itemSong-${i} .itemSong__content`)
            itemSongAuthorHover = document.querySelector(`.itemSong-${i} .itemSong__content span`)
            itemSongOptionHover = document.querySelector(`.itemSong-${i}.itemSong .icon-option`)

            clockElementEnd.innerText = `${convertSecondsToMinutes(linkSong.duration)}`
            
            itemSongHover = document.querySelector(`.itemSong-${i}`);

            itemSongHover.classList.add('itemSong--hover')
            itemSongHeadingHover.style.color = 'white'
            itemSongAuthorHover.style.color = 'white'
            itemSongOptionHover.style.fill = '#fff'

            window.scrollTo({
                top: itemSongChange.offsetTop - songRunning.clientHeight,
                behavior: 'smooth' // Hiệu ứng cuộn mượt
              })
        }
        conTrolSong.ontouchstart = (e) => {
            if(!linkSong.paused) {
                linkSong.pause()
                conTrolSong.ontouchend = (e) => {
                    linkSong.play()
                }
            }
        }
        conTrolSong.onchange = (e) => {
            linkSong.currentTime = linkSong.duration * e.target.value / 100
        }

        linkSong.onplay = (e) => {
            linkSong.ontimeupdate = (e) => {
                conTrolSong.value = linkSong.currentTime / linkSong.duration * 100
                clockElementNow.innerText = `${convertSecondsToMinutes(linkSong.currentTime)}`
            }
            startRotation();
            btnPause.classList.remove('hiden')
            btnPlay.classList.add('hiden')
            
        }
        linkSong.onpause = (e) => {
            clearInterval(intervalId); // Dừng quá trình quay
            btnPlay.classList.remove('hiden')
            btnPause.classList.add('hiden')
        }
        
    }

    function changeSong() {
        const changeLoop = document.querySelector('.btn-song-loop')
        const changeRandom = document.querySelector('.btn-song-random')
        const itemSong = document.querySelectorAll('.itemSong')
        const changeBackSong = document.querySelector('.btn-song-back')
        const changeNextSong = document.querySelector('.btn-song-next')

        changeLoop.onclick = function() {
            changeLoop.classList.toggle('selected')
        }

        changeRandom.onclick = () => {
            changeRandom.classList.toggle('selected')
        }

        changeBackSong.ontouchstart = () => {
            changeBackSong.classList.add('selected')
            changeBackSong.ontouchend = () => {
                changeBackSong.classList.remove('selected')
                i--;
                if(i < 0) {
                    i=0
                }
                getAudio(i);
                clearInterval(intervalId)
                linkSong.play()

            }
        }

        changeNextSong.ontouchstart = () => {
            changeNextSong.classList.add('selected')
            changeNextSong.ontouchend = () => {
                changeNextSong.classList.remove('selected')
                i++;
                if(i > itemSong.length - 1) {
                    i = itemSong.length - 1
                }
                getAudio(i);
                clearInterval(intervalId)
                linkSong.play()
            }
        }

        startRotation();
        clearInterval(intervalId)
        // chọn bài hát trong danh sách
        let checkClickOption = false
        const getOptionInListSong = document.querySelectorAll('.icon-option')
        getOptionInListSong.forEach((value) => {
            value.onclick = (e) => {
                checkClickOption = true
            }
        })

        itemSong.forEach(function(song, index) {
            song.onclick = function(e) {
                if(!checkClickOption) {
                    getAudio(index);
                    clearInterval(intervalId)
                    linkSong.play()
                    i = index
                }
                checkClickOption = false
            }
        })

        linkSong.onended =(e) => {
            const songRunning = document.querySelector('.songRunning');
            if(changeLoop.classList.value.includes('selected')) {
                getAudio(i);
                linkSong.play()
            }else if(changeRandom.classList.value.includes('selected')){
                i = Math.floor(Math.random() * itemSong.length)
                getAudio(i);
                linkSong.play()
            }else{
                i++
                if(i >= itemSong.length){
                    i = 0
                }
                getAudio(i);
                linkSong.play()
            }
        }
    }

    function scrollWindow() {
        const songRunning = document.querySelector('.songRunning');
        getListAudio.style.marginTop = `${songRunning.clientHeight}px`
        const songScroll = document.querySelector('window')
        window.onscroll = function () {
            Object.assign(imgSong.style, {
                width: `calc(64% - ${window.scrollY}px)`,
                paddingTop: `calc(64% - ${window.scrollY}px)`
            })
        }
    }

    getAudio(positionSongDefault);
    getPlay();
    showListAudio();
    conTrolInputSong();
    changeSong();
    scrollWindow()
}
start()