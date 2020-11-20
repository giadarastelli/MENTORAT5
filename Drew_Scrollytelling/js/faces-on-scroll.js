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
//text
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");
var phrase5 = document.querySelector("#phrase5");
var phrase6 = document.querySelector("#phrase6");
var phrase7 = document.querySelector("#phrase7");

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

//all text invisible at first
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";
phrase5.style.display = "none";
phrase6.style.display = "none";
phrase7.style.display = "none";


var newFaces = function () {

  offsetTop = window.pageYOffset;
  console.log(offsetTop);

  // PART 1
  //face1
  if (offsetTop >= 0 && offsetTop < 8 * screen.height) {
    happyFace.style.opacity = 1;
  } else {
    happyFace.style.opacity = 0;
  }
  //face2
  if (offsetTop >= 8 * screen.height && offsetTop < 12 * screen.height) {
    surprisedFace.style.opacity = 1;
  } else {
    surprisedFace.style.opacity = 0;
  }

  //phrase1
  if (offsetTop >= screen.height && offsetTop < 2 * screen.height) {
    phrase1.style.display = "block";
  } else {
    phrase1.style.display = "none";
  }

  //phrase2
  if (offsetTop >= 2 * screen.height && offsetTop < 3 * screen.height) {
    phrase2.style.display = "block";
  } else {
    phrase2.style.display = "none";
  }

  //phrase3
  if (offsetTop >= 4 * screen.height && offsetTop < 5 * screen.height) {
    phrase3.style.display = "block";
  } else {
    phrase3.style.display = "none";
  }

  //phrase4
  if (offsetTop >= 5 * screen.height && offsetTop < 6 * screen.height) {
    phrase4.style.display = "block";
  } else {
    phrase4.style.display = "none";
  }

  //phrase5
  if (offsetTop >= 6 * screen.height && offsetTop < 7 * screen.height) {
    phrase5.style.display = "block";
  } else {
    phrase5.style.display = "none";
  }

  //phrase6
  if (offsetTop >= 7 * screen.height && offsetTop < 8 * screen.height) {
    phrase6.style.display = "block";
  } else {
    phrase6.style.display = "none";
  }

  //phrase7
  if (offsetTop >= 8 * screen.height && offsetTop < 12 * screen.height) {
    phrase7.style.display = "block";
  } else {
    phrase7.style.display = "none";
  }
}

window.addEventListener("scroll", newFaces);
//console.log(window.addEventListener);