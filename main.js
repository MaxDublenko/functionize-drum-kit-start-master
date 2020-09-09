// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Function to manage what sounds to play
function manageSounds(sound, letter) {
  let audio = document.getElementById(sound);
  audio.currentTime = 0;
  audio.play();
  document.getElementById(letter).classList.add("playing");
}

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        manageSounds('clap', 'A');
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        manageSounds('hihat', 'S');
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        manageSounds('kick', 'D');
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        manageSounds('openhat', 'F');
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        manageSounds('boom', 'G')
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        manageSounds('ride', 'H');
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        manageSounds('snare', 'J');
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        manageSounds('tom', 'K');
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        let audio = document.getElementById("tink");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("L").classList.add("playing");
        manageSounds('tink', 'L');
    }
}

// Add transition end listeners

function addTransitionEndListeners(letter) {
  document.getElementById(letter).addEventListener('transitionend', removePlaying);
}

addTransitionEndListeners('A');
addTransitionEndListeners('S');
addTransitionEndListeners('D');
addTransitionEndListeners('F');
addTransitionEndListeners('G');
addTransitionEndListeners('H');
addTransitionEndListeners('J');
addTransitionEndListeners('K');
addTransitionEndListeners('L');

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}
