// BOTAO VOLTAR AO TOPO
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {

    // SE DESCER MAIS DE 300PX
    if (window.scrollY > 300) {

        topBtn.style.display = 'block';

    } else {

        topBtn.style.display = 'none';

    }

});

// VOLTAR AO TOPO
topBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

// ANIMAÇÃO HEADER
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.background = 'rgba(15, 23, 42, 0.9)';

    } else {

        header.style.background = 'transparent';

    }
});