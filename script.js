window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.addEventListener("click", arrow);

function displayHeart(e) {
  const newHeartImage = document.createElement('img');
  const heartArray = [
    "assets/valentinesCandyHeartsOne.png",
    "assets/valentinesCandyHeartsTwo.png",
    "assets/valentinesCandyHeartsThree.png",
    "assets/valentinesCandyHeartsFour.png",
    "assets/valentinesCandyHeartsFive.png",
    "assets/valentinesCandyHeartsSix.png",
    "assets/valentinesCandyHeartsSeven.png",
    "assets/valentinesCandyHeartsEight.png",
    "assets/valentinesCandyHeartsNine.png",
    "assets/valentinesCandyHeartsTen.png",
    "assets/valentinesCandyHeartsEleven.png",
    "assets/valentinesCandyHeartsTwelve.png",
  ];
  const heartPath = heartArray[Math.floor(Math.random()*heartArray.length)];
  newHeartImage.src = chrome.runtime.getURL(heartPath);
  newHeartImage.className = 'heart'
  newHeartImage.style = `left:${e.clientX}px;top:${e.clientY}px`
  document.body.appendChild(newHeartImage);
};

function arrow (e) {
  console.log('hello from arrow');
  let clicked  = `left:${e.clientX - 58}px;top:${e.clientY}px`;
  console.log('clicked:', e.clientX, e.clientY);
  const xVar = e.clientX - 200
  const YVar = e.clientY - 50
  console.log('clicked:', xVar, YVar);
  const shootArrow = [
    // from
    {
      position: 'fixed',
      top: 0,
      left: 0,
    },
    // to
    {
      top: xVar,
      left: YVar,
    }
  ]
  const arrowImage = document.createElement('img');
  arrowImage.setAttribute('class', 'arrowImage');
  arrowImage.src = chrome.runtime.getURL('assets/arrow.png');
  arrowImage.style = clicked;
  arrowImage.animate(shootArrow, 1000);
  document.body.appendChild(arrowImage);
  displayHeart(e)
}