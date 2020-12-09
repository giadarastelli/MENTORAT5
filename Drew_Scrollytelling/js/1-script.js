//PART 1: INTRO

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
var phrase4 = document.querySelector("#phrase4");
var phrase5 = document.querySelector("#phrase5");
var phrase6 = document.querySelector("#phrase6");
var phrase7 = document.querySelector("#phrase7");

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
phrase4.style.display = "none";
phrase5.style.display = "none";
phrase6.style.display = "none";
phrase7.style.display = "none";


// STORYLINE, MAKING DREW FACES AND STORY TEXTS VISIBLE

// SCROLL UPDATE FUNCTION
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var percentage = Math.round(scroll * 100 / height);

  // START STORY
  let search = document.querySelectorAll(".part1");
  search.forEach(function () {

    //FACE 1 (HAPPY)
    if (percentage >= 1 && percentage < 80) {
      happyFace.style.opacity = 1;
    } else {
      happyFace.style.opacity = 0;
    }

    //FACE 2 (SURPRISED)
    if (percentage >= 80 && percentage < 86) {
      surprisedFace.style.opacity = 1;
    } else {
      surprisedFace.style.opacity = 0;
    }

    //FACE 2 (THINKING)
    if (percentage >= 86 && percentage < 99) {
      thinkingFace.style.opacity = 1;
    } else {
      thinkingFace.style.opacity = 0;
    }


    // TEXT START
    //TEXT 1 (HI MY NAME IS DREW...)
    if (percentage >= 10 && percentage < 20) {
      phrase1.style.display = "block";
    } else {
      phrase1.style.display = "none";
    }

    //TEXT 2 (..AND IM A DESIGNER)
    if (percentage >= 20 && percentage < 30) {
      phrase2.style.display = "block";
    } else {
      phrase2.style.display = "none";
    }

    //TEXT 3
    if (percentage >= 30 && percentage < 50) {
      phrase3.style.display = "block";
    } else {
      phrase3.style.display = "none";
    }

    //TEXT 4
    if (percentage >= 50 && percentage < 60) {
      phrase4.style.display = "block";
    } else {
      phrase4.style.display = "none";
    }

    //TEXT 5
    if (percentage >= 60 && percentage < 70) {
      phrase5.style.display = "block";
    } else {
      phrase5.style.display = "none";
    }

    // TEXT 6 
    if (percentage >= 70 && percentage < 80) {
      phrase6.style.display = "block";
    } else {
      phrase6.style.display = "none";
    }

    //TEXT 7
    if (percentage >= 80 && percentage < 85) {
      phrase7.style.display = "block";
    } else {
      phrase7.style.display = "none";
    }

// TRIGGER EMAIL!!
    let dataset = document.querySelector(".email").className
    if (percentage >= 85 && dataset === "email trigger1" && percentage <= 87) {
      document.querySelector(".email").classList.remove("trigger1");
      show_email1();
    }


    if (percentage >= 92) {
      SecondPart();
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
      SecondPart();
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

new TypeIt("#phrase4", {
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#phrase5", {
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#phrase6", {
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#phrase7", {
  speed: 50,
  waitUntilVisible: true,
}).go();





// TOAST SCRIPT
(function (root, factory) {
  try {
    // commonjs
    if (typeof exports === 'object') {
      module.exports = factory();
      // global
    } else {
      root.toast = factory();
    }
  } catch (error) {
    console.log('Isomorphic compatibility is not supported at this time for toast.')
  }
})(this, function () {

  // We need DOM to be ready
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

  // Create toast object
  toast = {
    // In case toast creation is attempted before dom has finished loading!
    create: function () {
      console.error([
        'DOM has not finished loading.',
        '\tInvoke create method when DOM\s readyState is complete'
      ].join('\n'))
    }
  };
  var autoincrement = 0;

  // Initialize library
  function init() {
    // Toast container
    var container = document.createElement('div');
    container.id = 'cooltoast-container';
    document.body.appendChild(container);

    // @Override
    // Replace create method when DOM has finished loading
    toast.create = function (options) {
      var toast = document.createElement('div');
      toast.id = ++autoincrement;
      toast.id = 'toast-' + toast.id;
      toast.className = 'cooltoast-toast';

      // title
      if (options.title) {
        var h4 = document.createElement('h4');
        h4.className = 'cooltoast-title';
        h4.innerHTML = options.title;
        toast.appendChild(h4);
      }

      // text
      if (options.text) {
        var p = document.createElement('p');
        p.className = 'cooltoast-text';
        p.innerHTML = options.text;
        toast.appendChild(p);
      }

      // icon
      if (options.icon) {
        var img = document.createElement('img');
        img.src = options.icon;
        img.className = 'cooltoast-icon';
        toast.appendChild(img);
      }

      // click callback
      if (typeof options.callback === 'function') {
        toast.addEventListener('click', options.callback);
      }

      // toast api
      toast.hide = function () {
        toast.className += ' cooltoast-fadeOut';
        toast.addEventListener('animationend', removeToast, false);
      };

      // autohide
      if (options.timeout) {
        setTimeout(toast.hide, options.timeout);
      }
      // else setTimeout(toast.hide, 2000);

      if (options.type) {
        toast.className += ' cooltoast-' + options.type;
      }

      toast.addEventListener('click', toast.hide);


      function removeToast() {
        document.getElementById('cooltoast-container').removeChild(toast);
      }

      document.getElementById('cooltoast-container').appendChild(toast);
      return toast;

    }
  }

  return toast;

});