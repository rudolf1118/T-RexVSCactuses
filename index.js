const tRex = document.getElementById("tRex");
const cactus = document.getElementById("cactus")
const cactus1 = document.getElementById("cactus1")
const score = document.querySelector("#score")
const audio = document.createElement("audio")
audio.src = "http://www.superluigibros.com/downloads/sounds/SNES/SMRPG/wav/smrpg_jump.wav"

const stabaudio = document.createElement("audio");
stabaudio.src = "http://casual-effects.com/g3d/G3D10/build/data/md3/dragon/sound/player/dragon/falling1.wav"

const song = document.createElement("audio");
song.src = "https://www.soundsnap.com/dash_8_prop_plane_flying_short"


let interval = null;
let playerScore = 0;
debugger;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score:<b>${playerScore}</b>`

}
interval = setInterval(scoreCounter, 200)




document.addEventListener("keydown", function(event) {

    audio.play();
    jump();
});

function jump() {
    if (tRex.classlist != "jump") {
        tRex.classList.add("jump")
    }
    setTimeout(() => {
        tRex.classList.remove("jump")
    }, 300);
}

let sax = setInterval(function() {
    let tRexxx = parseInt(window.getComputedStyle(tRex).getPropertyValue("top"))
    let cactuss = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactuss < 50 && cactuss > 0 && tRexxx >= 150) {
        stabaudio.play()

        alert("                                                                                                                          " + "Game Over!" + "\n" + "                                                                                                                            " + "Try Again" + "\n" + "                                                                                                               " + "Tap F5 to start a new game!")
        clearInterval(interval);
        playerScore = 0;

    }
}, 5)