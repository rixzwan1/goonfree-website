document.addEventListener('DOMContentLoaded', function(){
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function onScroll(){
    const switchPoint = (hero ? hero.offsetHeight * 0.5 : 80);
    if(window.scrollY > switchPoint){
      navbar.classList.add('navbar-solid');
    } else {
      navbar.classList.remove('navbar-solid');
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  // MOBILE MENU TOGGLE
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // CLICK OUTSIDE CLOSE
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});
