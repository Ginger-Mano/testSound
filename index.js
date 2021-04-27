let appBody = document.querySelector('.main')
let sound = new Audio('https://freesound.org/data/previews/487/487531_5382295-lq.mp3');

let playSound = () => {
    let playBtn = document.createElement('button')
    playBtn.className = "playBtn"
    playBtn.innerText = "Play"

    playBtn.addEventListener("click", (evt) => {
        sound.play()
    })

    appBody.append(playBtn)
}

playSound()
