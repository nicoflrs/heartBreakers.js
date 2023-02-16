window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});



window.addEventListener("click", displayHeart);

function displayHeart(e) {
  console.log(e)
  const newHeartImage = document.createElement('img');
  newHeartImage.src = chrome.runtime.getURL("assets/valentinesCandyHeartsTwo.png");
  newHeartImage.style = `left:${e.offsetX}px;top:${e.offsetY}px`
  document.body.appendChild(newHeartImage);
}