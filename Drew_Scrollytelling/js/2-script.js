//PART 2: BRAINSTORMING

//GET SCROLL DATA
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);