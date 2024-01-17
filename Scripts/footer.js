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
