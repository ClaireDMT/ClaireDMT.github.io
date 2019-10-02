
const navs = document.querySelectorAll('.experience-employer');

const activate = () => { navs.forEach(nav => {
    nav.addEventListener("click", (event) => {
      const active = document.querySelector('.experience-employer.active');
      if (!active) {
        display(event.currentTarget)
        event.currentTarget.classList.toggle('active');
      } else {
        const id = active.id
        console.log(id)
        deactivate();
        if (id !== event.currentTarget.id) {
          display(event.currentTarget)
          event.currentTarget.classList.toggle('active');
        }
      };
    });
  });
};

const display = (x) => {
  const selected = x.querySelector('.experience-details');
  selected.classList.toggle('active');
}

const hide = (x) => {
  const selected = x.querySelector('.experience-details');
  selected.classList.remove('active');
}

const deactivate = () => {
  const active = document.querySelector('.experience-employer.active');
  active.classList.remove('active');
  hide(active);
}

activate();


window.addEventListener('scroll', () => {
  if (window.scrollY < 1310) {
    deactivate()
  };
})
