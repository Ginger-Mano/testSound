let appBody = document.querySelector('.main')
let sound1 = new Audio('https://freesound.org/data/previews/316/316857_4486188-lq.mp3');
let sound2 = new Audio('https://freesound.org/data/previews/196/196877_2526129-lq.mp3')

let useSound = () => {
    let playBtn = document.createElement('button')
    playBtn.className = "playBtn"
    playBtn.innerText = "Play"

    playBtn.addEventListener("click", (evt) => {
        sound1.play()
    })

    let stopBtn = document.createElement('button')
    stopBtn.className = "stopBtn"
    stopBtn.innerText = "Stop"

    stopBtn.addEventListener("click", (evt) => {
        sound2.play()
    })

    appBody.append(playBtn, stopBtn)
}

useSound()
