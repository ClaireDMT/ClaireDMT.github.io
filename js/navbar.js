const navbarContainer = document.querySelector('.container-navbar');
const navbarMobile = document.getElementById('navbarSupportedContent');
const navItemNavbarMobile = document.querySelectorAll('#navbarSupportedContent li.nav-item')

let position = window.scrollY;

const navbarTransitions = () => {
  window.addEventListener('scroll', () => {
    let newPosition = window.scrollY;
    let diff = position - newPosition;
    if ((position === 0) || (newPosition === 0)) {
      navbarContainer.classList.remove('hidden');
      navbarContainer.classList.remove('below-on-top');
      navbarContainer.classList.add('on-top');
    } else if ((newPosition > 20) && (newPosition < 50) && (diff < 0)) {
      navbarContainer.classList.add('below-on-top');
      navbarContainer.classList.remove('on-top');
    } else if ((newPosition > 100) && (diff < 0)) {
      navbarContainer.classList.remove('below-on-top');
      navbarContainer.classList.add('hidden');
      navbarContainer.classList.remove('on-top');
    } else {
      navbarContainer.classList.remove('hidden');
    }
    return position = newPosition;
  });
}

const navbarUnshow = () => {
  navItemNavbarMobile.forEach(navItem => {
    navItem.addEventListener('click', e => {
      navbarMobile.classList.remove('show');
      navbarContainer.classList.add('hidden');
    })
  })

}

export { navbarTransitions };
export { navbarUnshow };
