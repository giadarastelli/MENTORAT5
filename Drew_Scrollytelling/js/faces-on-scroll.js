var happyFace = document.querySelector(".drew-happy");
var surprisedFace = document.querySelector(".drew-surprised");
var thinkingFace = document.querySelector(".drew-thinking");
var ideaFace = document.querySelector(".drew-idea");
var sadFace = document.querySelector(".drew-sad");
var moreSadFace = document.querySelector(".drew-more-sad");
var nervousFace = document.querySelector(".drew-nervous");
var onFireFace = document.querySelector(".drew-on-fire");
var exhaustedFace = document.querySelector(".drew-exhausted");
var relievedFace = document.querySelector(".drew-relieved");
var deadFace = document.querySelector(".drew-dead");

var newFaces = function () {

  offsetTop = window.pageYOffset;

  //all faces invisible at first
  happyFace.style.opacity = 0;
  surprisedFace.style.opacity = 0;
  thinkingFace.style.opacity = 0;
  ideaFace.style.opacity = 0;
  sadFace.style.opacity = 0;
  moreSadFace.style.opacity = 0;
  nervousFace.style.opacity = 0;
  onFireFace.style.opacity = 0;
  exhaustedFace.style.opacity = 0;
  relievedFace.style.opacity = 0;
  deadFace.style.opacity = 0;


  console.log(offsetTop);

  //happy
  if (offsetTop >= 0 && offsetTop < screen.height) {
    happyFace.style.opacity = 1;
  } else {
    happyFace.style.opacity = 0;
  }

  //surprised
  if (offsetTop >= screen.height && offsetTop < 2 * screen.height) {
    surprisedFace.style.opacity = 1;
  } else {
    surprisedFace.style.opacity = 0;
  }

  //thinking
  if (offsetTop >= 2 * screen.height && offsetTop < 3 * screen.height) {
    thinkingFace.style.opacity = 1;
  } else {
    thinkingFace.style.opacity = 0;
  }

  //idea
  if (offsetTop >= 3 * screen.height && offsetTop < 4 * screen.height) {
    ideaFace.style.opacity = 1;
  } else {
    ideaFace.style.opacity = 0;
  }

  //sad
  if (offsetTop >= 4 * screen.height && offsetTop < 5 * screen.height) {
    sadFace.style.opacity = 1;
  } else {
    sadFace.style.opacity = 0;
  }

  //more sad
  if (offsetTop >= 5 * screen.height && offsetTop < 6 * screen.height) {
    moreSadFace.style.opacity = 1;
  } else {
    moreSadFace.style.opacity = 0;
  }
  //nervous
  if (offsetTop >= 6 * screen.height && offsetTop < 7 * screen.height) {
    nervousFace.style.opacity = 1;
  } else {
    nervousFace.style.opacity = 0;
  }
  //on fire
  if (offsetTop >= 7 * screen.height && offsetTop < 8 * screen.height) {
    onFireFace.style.opacity = 1;
  } else {
    onFireFace.style.opacity = 0;
  }

  //exhausted
  if (offsetTop >= 8 * screen.height && offsetTop < 9 * screen.height) {
    exhaustedFace.style.opacity = 1;
  } else {
    exhaustedFace.style.opacity = 0;
  }

  //relieved
  if (offsetTop >= 9 * screen.height && offsetTop < 10 * screen.height) {
    relievedFace.style.opacity = 1;
  } else {
    relievedFace.style.opacity = 0;
  }

  //dead
  if (offsetTop >= 10 * screen.height && offsetTop < 11 * screen.height) {
    deadFace.style.opacity = 1;
  } else {
    deadFace.style.opacity = 0;
  }


}

window.addEventListener("scroll", newFaces);
//console.log(window.addEventListener);
