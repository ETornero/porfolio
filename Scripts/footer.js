window.addEventListener('scroll', function() {

    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    if (scrollPosition > bodyHeight * 1) {

        moveElementWithTransition(footer, 0, -50, 750);
    } 
    else {

        moveElementWithTransition(footer, 0, 50, 750);
    }    
});

let abierto = false;

function toggleMenu() {

    console.log("Entra");

    let movilNavBar = document.getElementById('movilNavBar');

    if (!abierto) {

        movilNavBar.style.animation = 'showMovilNavBar 0.5s forwards';
        abierto = !abierto;
    } 
    else {

        movilNavBar.style.animation = 'hideMovilNavBar 0.5s forwards';
        abierto = !abierto;
    }
}