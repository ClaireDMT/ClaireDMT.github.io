const tabs = document.querySelectorAll('.experience-title');

const activate = (element) => {
  element.classList.add('active');
}

const deactivate = (element) => {
  element.classList.remove('active');
}

const openTab = (element) => {
  activate(element.parentNode);
  activate(element.nextElementSibling);
  element.lastElementChild.classList.add('rotated');
}

const closeTab = (element) => {
  deactivate(element);
  deactivate(element.lastElementChild);
  element.firstElementChild.lastElementChild.classList.remove('rotated');
}

const openOrCloseTab = (element) => {
  const active_before = document.querySelector('.experience-employer.active');
  if (!active_before) {
    openTab(element);
  } else {
    closeTab(active_before);
    if (active_before.id !== element.parentNode.id) {
      openTab(element);
    }
  };
}

const switchTabs = () => { tabs.forEach(tab => {
  tab.addEventListener("click", (event) => openOrCloseTab(event.currentTarget));
  });
};

const closeOnScroll = () => {
  window.addEventListener('scroll', () => {
    const active = document.querySelector('.experience-employer.active');
    if ((active) && ((window.scrollY > 2806) || (window.scrollY < 1080))) {
      closeTab(active)
    };
  })
}

export { switchTabs };
export { closeOnScroll };
