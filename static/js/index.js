window.addEventListener('click', function (event) {
  event.preventDefault();
  var player = this.document.getElementById('player');
  var playOverlay = this.document.getElementById('play-overlay');
  var wordArt = this.document.getElementById('word-art');
  if (player.paused) {
    player.play();
    playOverlay.style.display = 'none';
    wordArt.style.display = 'block';
  } else {
    player.pause();
    playOverlay.style.display = 'flex';
  }
});
