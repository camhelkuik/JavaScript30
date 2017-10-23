// get out elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// build out functions
function togglePlay() {
  if (video.paused){
    video.play();
  }else{
    video.pause();
  }
}

function updateButton(){
  if (this.paused){
    var icon = '►';
  }else{
    var icon = '❚ ❚';
  }
  toggle.textContent = icon;

  // const icon = this.pause ? '►' : '❚ ❚';
  // toggle.textContent = icon;
}

// hook up the even listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
