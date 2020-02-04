window.onload = TopMenuMinimizer;
window.onload = stickyElement;
let hamburgerBtn = document.getElementById('js-hamburger-toggle')

function mainMenuDisplayToggler(e) {
  document.children[0].classList.toggle('show-main-menu')
  this.classList.toggle('is-active')
}
hamburgerBtn.addEventListener('click', mainMenuDisplayToggler)

function TopMenuMinimizer() {

  var breakpoint = 100; // scroll position for when to minimize top menu when scrolling in 992px view
  var outermost = document.querySelector('.outermost');


  if (window.innerWidth > 992 &&
    document.documentElement.scrollTop < breakpoint) {
    outermost.classList.add('j-top-menu-full');
  } else {
    outermost.classList.remove('j-top-menu-full');
  }
}

document.addEventListener('scroll', TopMenuMinimizer)
window.addEventListener('resize', TopMenuMinimizer)

function stickyElement() { // if the bottom screen reach the the bottom of the sticky element
  let elements = document.querySelectorAll('.js-sticky'); // get all elements with sticky-nw
  elements.forEach(el => {
    let scrollPosBottom = document.documentElement.scrollTop + window.innerHeight;
    let elScrollPosBottom = el.parentElement.offsetTop + el.offsetHeight;
    if (scrollPosBottom >= elScrollPosBottom) {
      el.style.position = 'sticky';
      el.style.top = `-${el.offsetHeight - window.innerHeight}px`;
    } else {
      el.style.position = '';
      el.style.top = '';
    }
  });
}

document.addEventListener('scroll', stickyElement);
window.addEventListener('resize', stickyElement);