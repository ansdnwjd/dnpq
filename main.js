let mainText = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 100) {
    mainText.style.animation = "x 1s ease-out forwards";
  }
  else{
      mainText.style.animation='an 1s ease-out';
  }
});
