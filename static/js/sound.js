// Removing transition

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a function
  e.target.classList.remove('playing');
}

// Introduce es6
// audio file select through querySelector

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);// we need to find the key value from keyboard
  if (!audio) return; // stop the function from running all over again.
  key.classList.add('playing');
  audio.currentTime = 0; // rewind to the start
  audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // it's a node list not an array
window.addEventListener('keydown', playSound);
