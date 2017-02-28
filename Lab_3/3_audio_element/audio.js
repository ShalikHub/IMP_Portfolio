var audio = document.getElementById('music');
var volume = document.getElementById('volume');

function playStream() {
  audio.play();
}

function stopStream() {
  audio.pause();
}

function changeVolume() {
  audio.volume = volume.value;
}

volume.addEventListener("input", changeVolume);
