//PART 3: VIDEO CALL

//GET SCROLL DATA
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// GET DREW FACES
var ideaFace = document.querySelector(".drew-idea");
var sadFace = document.querySelector(".drew-sad");
var moreSadFace = document.querySelector(".drew-more-sad");

// GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");
var phrase5 = document.querySelector("#phrase5");
// GET JOIN MEETING (START)
var startScreen = document.querySelector(".start-screen");
var joinButton = document.querySelector(".join-button");
var scrollPage = document.querySelector("body.part3");
// GET MEETING WINDOWS (CALL)
var drewWindow = document.querySelector(".drew-call-container");
var textBox = document.querySelector(".call-text-container");
var leaveButton = document.querySelector(".leave-button");

// SET FACES INVISIBLE
ideaFace.style.opacity = 0;
sadFace.style.opacity = 0;
moreSadFace.style.opacity = 0;
// SET TEXT INVISIBLE
phrase1.style.display = "block";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";
phrase5.style.display = "none";

// SET PAGE OVERFLOW HIDDEN
scrollPage.style.overflow = "hidden";


// CLICK BUTTON TO JOIN MEETING
joinButton.addEventListener('click', function startCall() {
    scrollPage.style.overflow = "visible";
    startScreen.classList.add("hidden");
    drewWindow.classList.remove("scaleDown");
    leaveButton.classList.remove("scaleDown");
    textBox.classList.remove("hidden");
})


// STORYLINE, MAKING DREW FACES AND STORY TEXTS VISIBLE

// SCROLL UPDATE FUNCTION
var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var percentage = Math.round(scroll * 100 / height);

    // START STORY
    let search = document.querySelectorAll(".part3");
    search.forEach(function () {

        // KEEPS SCROLLING IN MIDDLE POSSIBLE IF SITE RELOADS
        if (percentage >= 1) {
            scrollPage.style.overflow = "visible";
            startScreen.classList.add("hidden");
            textBox.classList.remove("hidden");
            drewWindow.classList.remove("scaleDown");
            leaveButton.classList.remove("scaleDown");
        }

        // FACE 1 (IDEA FACE)
        if (percentage < 50) {
            ideaFace.style.opacity = 1;
        } else {
            ideaFace.style.opacity = 0;
        }

        // TEXT 1 (BOSSTITCH: HI DREW...)
        if (percentage < 20) {
            phrase1.style.display = "block";
        } else {
            phrase1.style.display = "none";
        }

        // TEXT 2 (BOSSTITCH: ...I SAW YOUR IDEAS)
        if (percentage >= 20 && percentage < 40) {
            phrase2.style.display = "block";
        } else {
            phrase2.style.display = "none";
        }

        // TEXT 3 (BOSSTITCH: I THOUGHT MAYBE CHANGE...THIS THAT)
        if (percentage >= 40 && percentage < 60) {
            phrase3.style.display = "block";
        } else {
            phrase3.style.display = "none";
        }


        // FACE 2 (SAD FACE)
        if (percentage >= 50 && percentage < 90) {
            sadFace.style.opacity = 1;
        } else {
            sadFace.style.opacity = 0;
        }

        // TEXT 4 (BOSSTITCH: and this too.)
        if (percentage >= 60 && percentage < 80) {
            phrase4.style.display = "block";
        } else {
            phrase4.style.display = "none";
        }

        // SHOW 'CALL ENDED' SCREEN
        if (percentage >= 80 && percentage < 100) {
            document.querySelector(".call-ended").classList.remove("hidden");

        } else {
            document.querySelector(".call-ended").classList.add("hidden");
        }

        // FACE 3 (MORE SAD FACE) AND TEXT 5 (OH OK)
        if (percentage >= 90 && percentage < 100) {
            moreSadFace.style.opacity = 1;
            phrase5.style.display = "block";

        } else {
            moreSadFace.style.opacity = 0;
            phrase5.style.display = "none";

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
    waitUntilVisible: true
}).go();

new TypeIt("#phrase4", {
    speed: 50,
    waitUntilVisible: true
}).go();

new TypeIt("#phrase5", {
    speed: 50,
    waitUntilVisible: true
}).go();