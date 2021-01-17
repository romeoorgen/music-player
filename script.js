const music = document.querySelector('audio');
const prevBtn = document.querySelector('prev');
const playBtn = document.querySelector('play');
const nextBtn = document.querySelector('next');

//Check if play
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));