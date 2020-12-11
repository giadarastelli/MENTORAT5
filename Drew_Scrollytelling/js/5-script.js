//PART 5: COUNTDOWN AND END

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



// STORYLINE, MAKING DREW FACES AND STORY TEXTS VISIBLE

// SCROLL UPDATE FUNCTION
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var percentage = Math.round(scroll * 100 / height);

  // START STORY
  let search = document.querySelectorAll(".part5");
  search.forEach(function () {

    // FACE 1 (ON FIRE FACE)
    if (percentage >= 31 && percentage < 40) {
      onFireFace.style.opacity = 1;
    } else {
      onFireFace.style.opacity = 0;
    }

    // FACE 2 (EXHAUSTED FACE)
    if (percentage >= 40 && percentage < 50) {
      exhaustedFace.style.opacity = 1;
    } else {
      exhaustedFace.style.opacity = 0;
    }

    // TEXT 1 (UFF I AM FINALLY DONW)
    if (percentage >= 40 && percentage < 50) {
      phrase1.style.display = "block";
    } else {
      phrase1.style.display = "none";
    }

    // FACE 3 (RELIEFED FACE)
    if (percentage >= 50 && percentage < 80) {
      relievedFace.style.opacity = 1;
    } else {
      relievedFace.style.opacity = 0;
    }

    // FACE 4 (DEAD FACE)
    if (percentage >= 80 && percentage < 99) {
      deadFace.style.opacity = 1;
    } else {
      deadFace.style.opacity = 0;
    }

  })
}
updateProgress();
$(window).scroll(updateProgress);



// NOTIFICATION SCRIPTS - FOR THE TOAST NOTIFICATION

// FIRST NOTIFICATION CONTENT
function show_email1() {
  console.log('works')
  disableScroll();
  toast.create({
    title: 'From: Mr Bosstitch <br> Subject: New Project',
    text: '----------------------------<br> Hi Drew,<br> I have a new task for you, design a logo.<br><br> Cheers,<br> Mr. B',
    icon: "img/button-mail.png",
    callback: function () {
      enableScroll();
      // SecondPart();
    }
  });
};

// SECOND NOTIFICATION CONTENT
function show_email2() {
  console.log('works')
  disableScroll();
  toast.create({
    title: 'From: Mr Bosstitch <br> Subject: i forgot...',
    text: '----------------------------<br> Hi Drew,<br>please finish the project by the end of the week.<br><br> Cheers,<br> Mr. B',
    icon: "img/button-mail.png",
    callback: function () {
      enableScroll();
      // SecondPart();
    }

  });
};


function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function () {};
}

function SecondPart() {
  window.location.replace("part2.html");
  reload();
}

function FifthPart() {
  window.location.replace("part5.html");
  reload();
}



//TYPE-IT TEXT ANIMATIONS
new TypeIt("#phrase1", {
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#phrase2", {
  speed: 50,
  waitUntilVisible: true
}).go();