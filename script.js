window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.addEventListener("click", arrow);

function displayHeart(e) {
  const newHeartImage = document.createElement('img');
  newHeartImage.src = chrome.runtime.getURL("assets/valentinesCandyHeartsTwo.png");
  newHeartImage.className = 'heart'
  newHeartImage.style = `left:${e.clientX}px;top:${e.clientY}px`
  document.body.appendChild(newHeartImage);
};

function arrow (e) {
  console.log('hello from arrow');
  let clicked  = `left:${e.offsetX}px;top:${e.offsetY}px`;
  console.log('clicked:', clicked);
  const shootArrow = [
    // from
    {
      position: 'fixed',
      top: 0,
      left: 0,
    },
    // to
    {
      top: `${e.clientY} - 50px`,
      left: `${e.clientX} - 50px`,
    }
  ]
  const arrowImage = document.createElement('img');
  arrowImage.setAttribute('class', 'arrowImage');
  arrowImage.src = chrome.runtime.getURL('assets/arrow.png');
  arrowImage.style = clicked;
  arrowImage.animate(shootArrow, 3000);
  document.body.appendChild(arrowImage);
}