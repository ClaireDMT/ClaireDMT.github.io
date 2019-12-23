const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

const scrollOnNavLinks = () => {
  navLinks.forEach(link => {
    link.addEventListener("click", (event) => scroll(event.currentTarget));
  });
}

const scroll = (element) => {
  const section = element.id.slice(0, -5);
  document.getElementById(section).scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'nearest'
  });
}

const scrollProjects = () => {
  const projectsLink = document.querySelector('#projects-link');
  projectsLink.addEventListener("click", (e) => {
    document.getElementById("portfolio").scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'nearest'
    })
  });
}


export { scrollProjects };
export { scrollOnNavLinks };
