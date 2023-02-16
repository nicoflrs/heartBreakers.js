
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const button = document.createElement('button');
button.setAttribute('name', 'test button');
button.innerText = "Test Button";
document.body.appendChild(button);

window.addEventListener("click", displayHeart);

function displayHeart() {
  const newHeartImage = document.createElement('img');
  newHeartImage.src = 'assets/valentinesCandyHeartsTwo.png'
  document.body.appendChild(newHeartImage);
}