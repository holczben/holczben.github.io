document.getElementById('hamburger').onclick = hamburger;

function hamburger() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    scroll();
    const links = document.getElementById('links');
    links.style.display  = links.style.display == 'flex' ? 'none' : 'flex';
    console.log(links.style.display)
}

function scroll() {
    const current = document.body.style.overflowY;
    const newVal = current === 'unset' || current === '' ? 'hidden' : 'unset';
    document.body.style.overflowY = newVal;
    document.documentElement.style.overflowY = newVal;
}

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', e => {
    hamburger()
  });
});
