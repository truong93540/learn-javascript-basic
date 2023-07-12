const listSong = [
    {
        name: 'VIETNAM - My Home',
        author: 'Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/3/9/d/b39d557a90d6e08307de893ca47b1797.jpg',
        song: 'https://vnno-pt-1-tf-mp3-s1-zmp3.zmdcdn.me/f32df131e3720a2c5363/5868116865556102695?authen=exp=1689263627~acl=/f32df131e3720a2c5363/*~hmac=c5c100fa0d8a0dee17df2ec8a5f57b91&fs=MTY4OTA5MDgyNzQwMXx3ZWJWNnwwfDExMy4yMy40My4yMjY'
    },
    {
        name: 'Thị Mầu',
        author: 'Hòa Minzy, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/b/5/7/5b57e6c61848cfed2fa19cd31b293898.jpg',
        song: 'https://vnno-pt-2-tf-mp3-s1-zmp3.zmdcdn.me/a04398b82bf8c2a69be9/807124160692996856?authen=exp=1689263698~acl=/a04398b82bf8c2a69be9/*~hmac=80cbba90df2b3c9678fdbea8855e1fc6&fs=MTY4OTA5MDg5ODU1NXx3ZWJWNnwwfDQyLjExOC43MS44MQ'
    },
    {
        name: 'Túy Âm',
        author: 'Xesi, Masew, Nhật Nguyễn',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/f/9/f9c0475ec02716554fba3f63e5b4ac37_1504991428.jpg',
        song: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/1566955f4f1ba645ff0a/5714298647625346942?authen=exp=1689262455~acl=/1566955f4f1ba645ff0a/*~hmac=8a99e30596c5cde0bb4696e924b36cc9&fs=MTY4OTA4OTY1NTUxMXx3ZWJWNnwwfDExOC43MC4xMjYdUngNzI'
    },
    {
        name: 'Ái Nộ',
        author: 'Yến Tattoo, Masew, Great',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/b/1/c/6b1c9deca228d456e63e1c9c0bfd1c28.jpg',
        song: 'https://vnno-pt-2-tf-mp3-s1-zmp3.zmdcdn.me/19f5997595347c6a2525/8198794806852254584?authen=exp=1689262863~acl=/19f5997595347c6a2525/*~hmac=ba7e4f36fa88336e14f0201725622537&fs=MTY4OTA5MDA2MzAxNHx3ZWJWNnwxMDk1ODQwMjMzfDExMy4yMy41NC43NA'
    },
    {
        name: 'Buồn Của Anh',
        author: 'K-ICM, Đạt G, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/covers/c/0/c0827e5f2c898fc987e7883151b0476a_1513651595.png',
        song: 'https://vnno-pt-1-tf-mp3-s1-zmp3.zmdcdn.me/ffe961cab58e5cd0059f/68695268730484457?authen=exp=1689262727~acl=/ffe961cab58e5cd0059f/*~hmac=907ef7726f2d6c6734551d2bc15d8e1b&fs=MTY4OTA4OTkyNzA3OHx3ZWJWNnwwfDExOC42OC41Ni4xMDg'
    },
    {
        name: 'Lửng Lơ',
        author: 'Masew, B Ray, RedT, Ý Tiên',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/3/0/3/3/30332432e55a395202949715ca0162c1.jpg',
        song: 'https://vnno-pt-3-tf-mp3-s1-zmp3.zmdcdn.me/b321eb371d76f428ad67/5298801484306001359?authen=exp=1689263042~acl=/b321eb371d76f428ad67/*~hmac=0b7ef4676e18276bafcb7e30653cb40e&fs=MTY4OTA5MDI0MjkwNXx3ZWJWNnwxMDQwNDQ1Mjg2fDEdUngNTUdUngNDMdUngMTA3'
    },
    {
        name: 'Độ Tộc 2',
        author: 'Do Mixi, Pháo, Phúc Du, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/e/6/2/fe6231fdfee5449a51e6ed5741ace3c8.jpg',
        song: 'https://vnno-pt-4-tf-mp3-s1-zmp3.zmdcdn.me/e7e000cc268dcfd3969c/2172183184086830160?authen=exp=1689263015~acl=/e7e000cc268dcfd3969c/*~hmac=eae058cb12ff556a3043729fb5504833&fs=MTY4OTA5MDIxNTg4M3x3ZWJWNnwwfDExOC42OC41Ni4xMDg'
    },
    {
        name: 'Phố Đã Lên Đèn (Masew Remix)',
        author: 'Masew, Huyền Tâm Môn, Great',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/8/d/978d12830c18df95c26e93e658019166.jpg',
        song: 'https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/33dbfdebe3aa0af453bb/4457018915500166957?authen=exp=1689263806~acl=/33dbfdebe3aa0af453bb/*~hmac=a7e968eba14fccea182f23965d8a8fed&fs=MTY4OTA5MTAwNjUwNXx3ZWJWNnwxMDk1ODQwMjMzfDExMy4yMy41NC43NA'
    },
    {
        name: 'Cưới Thôi 2',
        author: 'Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/7/f/3/77f31ae3da7b0e3bd6c273633499a1f3.jpg',
        song: 'https://vnno-pt-4-tf-mp3-s1-zmp3.zmdcdn.me/cd1d7fea2aaac3f49abb/6275816395190782091?authen=exp=1689263932~acl=/cd1d7fea2aaac3f49abb/*~hmac=b68d7411d88fb5162d78892c34dfaf5f&fs=MTY4OTA5MTEzMjQ4Nnx3ZWJWNnwxMDk1ODQwMjMzfDExMy4yMy41NC43NA'
    },
    {
        name: 'Kém Duyên',
        author: 'Rum, NIT, Masew',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/8/b/8bdfda3e88db5f9b6bf2ff7d1757e989_1510654845.jpg',
        song: 'https://vnno-vn-6-tf-mp3-s1-zmp3.zmdcdn.me/24d3f87c2f38c6669f29/2095096462496895008?authen=exp=1689263666~acl=/24d3f87c2f38c6669f29/*~hmac=06f77de88e1eea525f0a4365ea97a8f1&fs=MTY4OTA5MDg2Njk0OXx3ZWJWNnwxMDMxMDUwNDY0fDEdUngNTMdUngNTEdUngNDg'
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