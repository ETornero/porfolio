function validateForm() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let alertElement = document.getElementById('alert');

    if (name !== '' && email !== '' && message !== '') {

        document.getElementById('contactUsForm').submit();

        alertElement.innerHTML = "¡Formulario enviado correctamente!";
        alertElement.style.backgroundColor = '#6dff81';
        alertElement.style.animation = 'showAlert 0.5s forwards';

        setTimeout(() => {
            alertElement.style.animation = 'hideAlert 0.5s forwards';
        }, 5000); 
    } 
    else {

        alertElement.innerHTML = "¡Rellena todos los campos del formulario!";
        alertElement.style.backgroundColor = '#ff3f3f';
        alertElement.style.animation = 'showAlert 0.5s forwards';

        setTimeout(() => {
            alertElement.style.animation = 'hideAlert 0.5s forwards';
        }, 5000); 
    }
}

$(document).ready(function(){
    $("#contact").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function(){

    $("#contactMovil").on('click', function(event) {

        if (this.hash !== "") {
        
            event.preventDefault();
            toggleMenu();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
