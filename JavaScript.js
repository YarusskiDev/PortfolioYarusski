const linksInternos = document.querySelectorAll("a[href^='#']");

linksInternos.forEach( link => link.addEventListener("click",MeuScroll))


function MeuScroll(event) {

    event.preventDefault();
    var href = event.currentTarget.getAttribute("href");
    var section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block:'start'
    });


}