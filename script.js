document.getElementById('hamburger').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const links = document.getElementById('links');
    links.style.display  = links.style.display == 'flex' ? 'none' : 'flex';
    console.log(links.style.display)
}
