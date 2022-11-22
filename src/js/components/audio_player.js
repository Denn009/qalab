const player = document.querySelector(".audio_item--1");
      playBtn = document.querySelector(".audio_btn--1");
      audio = document.querySelector('.audio--1');
      player2 = document.querySelector(".audio_item--2");
      playBtn2 = document.querySelector(".audio_btn--2");
      audio2 = document.querySelector('.audio--2');
      player3 = document.querySelector(".audio_item--3");
      playBtn3 = document.querySelector(".audio_btn--3");
      audio3 = document.querySelector('.audio--3');

function playSong(){
  player.classList.add('play');
  playBtn.classList.add('btn_active');
  audio.play();
}

function pauseSong() {
  player.classList.remove('play');
  playBtn.classList.remove('btn_active');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = player.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  }else{
    playSong();
  }
})

function playSong2(){
  player2.classList.add('play');
  playBtn2.classList.add('btn_active');
  audio2.play();
}

function pauseSong2() {
  player2.classList.remove('play');
  playBtn2.classList.remove('btn_active');
  audio2.pause();
}

playBtn2.addEventListener('click', () => {
  const isPlaying = player2.classList.contains('play');
  if (isPlaying) {
    pauseSong2();
  }else{
    playSong2();
  }
})

function playSong3(){
  player3.classList.add('play');
  playBtn3.classList.add('btn_active');
  audio3.play();
}

function pauseSong3() {
  player3.classList.remove('play');
  playBtn3.classList.remove('btn_active');
  audio3.pause();
}

playBtn3.addEventListener('click', () => {
  const isPlaying = player3.classList.contains('play');
  if (isPlaying) {
    pauseSong3();
  }else{
    playSong3();
  }
})
