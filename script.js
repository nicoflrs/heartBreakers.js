window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});



window.addEventListener("click", displayHeart);

function displayHeart() {
  const newHeartImage = document.createElement('img');
  newHeartImage.src = 'assets/valentinesCandyHeartsTwo.png'
  document.body.appendChild(newHeartImage);
}