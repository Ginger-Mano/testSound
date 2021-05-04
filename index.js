let appBody = document.querySelector('.main')
let sound1 = new Audio('https://freesound.org/data/previews/316/316857_4486188-lq.mp3');
let sound2 = new Audio('https://freesound.org/data/previews/196/196877_2526129-lq.mp3');


let useSound = () => {

    let soundDiv = document.createElement("div")
        soundDiv.className = "soundDiv"

    let playBtnDiv =  document.createElement('div')
        playBtnDiv.className = "playBtnDiv"

    let playTitle = document.createElement('h2')
        playTitle.innerHTML = "Play"

    let playBtn = document.createElement('button')
        playBtn.className = "playBtn"
        
    let playImg = document.createElement('img')
        playImg.className = "playImg"
        playImg.src = "https://www.nicepng.com/png/detail/7-75606_play-button-png-image-instagram.png"

        playBtn.addEventListener("click", (evt) => {
        sound1.play()
    })


    let stopTitle = document.createElement('h2')
        stopTitle.innerHTML = "Stop"

    let stopBtnDiv =  document.createElement('div')
        stopBtnDiv.className = "stopBtnDiv"

    let stopBtn = document.createElement('button')
        stopBtn.className = "stopBtn"
        
    let stopImg = document.createElement('img')
        stopImg.className = "stopImg"
        stopImg.src = "https://w7.pngwing.com/pngs/909/198/png-transparent-computer-icons-font-awesome-stop-button-building-text-united-states-thumbnail.png"

        stopBtn.addEventListener("click", (evt) => {
        sound2.play()
    })


    playBtn.append(playImg)
    stopBtn.append(stopImg)
    playBtnDiv.append(playTitle, playBtn)
    stopBtnDiv.append(stopTitle, stopBtn)
    soundDiv.append(playBtnDiv, stopBtnDiv)
    appBody.append(soundDiv)
}

useSound()

