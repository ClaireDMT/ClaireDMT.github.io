const mentionsLink = document.querySelector('#footer a');
const mentions = document.querySelector('.mentions-legales');
const emailLign = document.querySelector('.email a');


const displayMentions = () => {
  mentionsLink.addEventListener('click', (e) => {
    mentions.classList.toggle('clicked');
    mentionsLink.classList.toggle('orange-text');
    emailLign.classList.toggle('mentions-activated');
    window.scrollBy({
      top: 220,
      behavior: 'smooth'
    });
  })
}

export { displayMentions };
