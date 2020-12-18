//PART 2: BRAINSTORMING

//GET SCROLL DATA
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

//GET DREW FACES
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

//GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");

//SET DREW FACES INVISIBLE
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

//SET STORY TEXTS INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";







// DREWS STORYLINE TO PART 2 STARTS HERE:


// SCROLL UPDATE FUNCTION
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var percentage = Math.round(scroll * 100 / height);

  let search = document.querySelectorAll(".part2");
  search.forEach(function () {

    // //TEXT 1 UND IDEA-FACE DREW
    // if (percentage >= 50 && percentage < 90) {
    //   phrase1.style.display = "block";
    //   happyFace.style.opacity = 1;
    // }

    // if (percentage >= 0 && percentage < 90) {
    //   // !!!! INSERT STORY CONTENT HERE !!!!!
    // }

    //FACE 1 (THINKING)
    if (percentage >= 40 && percentage < 60) {
      thinkingFace.style.opacity = 1;
    } else {
      thinkingFace.style.opacity = 0;
    }

    //FACE 2 (IDEA FACE)
    if (percentage >= 60 && percentage < 99) {
      ideaFace.style.opacity = 1;
    } else {
      ideaFace.style.opacity = 0;
    }



    // TEXT START 2
    //TEXT 1 (MANY IDEAS)
    if (percentage >= 60 && percentage < 70) {
      phrase1.style.display = "block";
    } else {
      phrase1.style.display = "none";
    }

    //TEXT 2
    if (percentage >= 70 && percentage < 80) {
      phrase2.style.display = "block";
    } else {
      phrase2.style.display = "none";
    }

    //TEXT 3
    if (percentage >= 94 && percentage < 100) {
      phrase3.style.display = "block";
    } else {
      phrase3.style.display = "none";
    }

    // PHONECALL RINGTONE
    if (percentage >= 95 && percentage < 99) {
      document.querySelector(".ringtone").play().loop;
    } else {
      document.querySelector(".ringtone").pause();
    }

  })
}
updateProgress();
$(window).scroll(updateProgress);





//TYPE-IT TEXT ANIMATIONS
new TypeIt("#phrase1", {
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#phrase2", {
  speed: 50,
  waitUntilVisible: true
}).go();

new TypeIt("#phrase3", {
  speed: 50,
  waitUntilVisible: true,
}).go();