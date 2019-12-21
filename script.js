const navs = document.querySelectorAll('.experience-title');
const active = document.querySelector('.experience-employer.active');

const activate = () => { navs.forEach(nav => {
    nav.addEventListener("click", (event) => {
      const active_before = document.querySelector('.experience-employer.active');
      if (!active_before) {
        display(event.currentTarget.nextElementSibling);
        event.currentTarget.parentNode.classList.toggle('active');
      } else {
        const id = active_before.id
        deactivate(active_before);
        console.log(event.currentTarget.parentNode.id)
        if (id !== event.currentTarget.parentNode.id) {
          event.currentTarget.parentNode.classList.toggle('active');
          display(event.currentTarget.nextElementSibling);
        }
      };
    });
  });
};

const display = (x) => {
  x.classList.toggle('active');
}

const hide = (x) => {
  const selected = x.querySelector('.experience-details');
  // console.log(selected);
  selected.classList.remove('active');
}

const deactivate = (x) => {
  // const active = document.querySelector('.experience-employer.active');
  x.classList.remove('active');
  hide(x);
}

activate();


window.addEventListener('scroll', () => {
  const active = document.querySelector('.experience-employer.active');
  if ((active) && (window.scrollY < 1310)) {
    deactivate()
  };
})

let position = window.scrollY;
const navbarContainer = document.querySelector('.container-navbar')

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
  } else {
    navbarContainer.classList.remove('hidden');
  }
  return position = newPosition;
});
