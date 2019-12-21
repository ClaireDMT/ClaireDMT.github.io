const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

const scrollOnNavLinks = () => {
  navLinks.forEach(link => {
    link.addEventListener("click", (event) => scroll(event.currentTarget));
  });
}

const scroll = (element) => {
  const section = element.id.slice(0, -5);
  console.log(section);
  document.getElementById(section).scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'nearest'
  });
}

export { scrollOnNavLinks };
