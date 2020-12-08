//PART 4: IDEA GOES TO TRASH

//GET SCROLL DATA
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);