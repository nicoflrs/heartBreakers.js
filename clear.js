function clearTags (hearts, arrowImages) {
  for (let i = 0; i < hearts.length; i++) {
      hearts[i].parentNode.removeChild(hearts[i]);
      i--;
  };
  
  for (let i = 0; i < arrowImages.length; i++) {
      arrowImages[i].parentNode.removeChild(arrowImages[i]);
      i--;
  };
};

clearTags(document.getElementsByClassName('heart'), document.getElementsByClassName('arrowImage'));