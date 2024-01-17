document.addEventListener("DOMContentLoaded", function() {

    let titleText = document.getElementById("chargeText");
    let chargeLineText = document.getElementById("chargeLineText");
    let navBar = document.getElementById("navbar");
    let container = document.getElementById("mainContainer");

    let textToWrite = "Eric Tornero Medina";
    
    if(sessionStorage.getItem('charged') == null) {

        sessionStorage.setItem('charged', false);
    }

    function addCharacterWithDelay(index) {

        if (index < textToWrite.length) {
            
            titleText.innerHTML += textToWrite[index];

            setTimeout(function() { 

                addCharacterWithDelay(index + 1);

            }, 75);
        } 
        else {
           
            titleText.innerHTML = textToWrite;
            setActiveLineWithDelay(0, true);
        }
    }

    function setActiveLineWithDelay(times, value) {

        if (times != 1) {
            
            if (value) chargeLineText.style.color = '#ffffff';
            else chargeLineText.style.color = '#222222';

            setTimeout(function() { 

                setActiveLineWithDelay(times + 1, !value);

            }, 300);
        } 
        else {
         
            fadeOut(titleText);
            fadeOut(chargeLineText);

            setTimeout(function() { 

                document.getElementById("chargeTextContainer").style.display = 'none';
                container.style.display = 'block';

                moveElementWithTransition(navBar, 0, 50, 500);
                navBar.style.display = 'flex';

            }, 250);
            
            container.style.display = 'block';
            fadeOut(container);

            setTimeout(function() { 

                fadeIn(container);
                sessionStorage.setItem('charged', true);

            }, 750);
        }
    }

    console.log(sessionStorage.getItem('charged'));

    if (sessionStorage.getItem('charged') == 'false') {

        titleText.innerHTML = "";
        chargeLineText.innerHTML = "|";
        addCharacterWithDelay(0);
    } 
    else {

        titleText.innerHTML = "";
        setActiveLineWithDelay(1, true);
    }
});

function fadeIn(element) {

    element.style.opacity = '1';
    element.style.transition = 'opacity 0.5s';
}

function fadeOut(element) {

    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s';
}

function moveElementWithTransition(element, endX, endY, duration) {

    element.style.transition = `transform ${duration / 1000}s ease-in-out`;

    setTimeout(() => {
        element.style.transform = `translate(${endX}px, ${endY}px)`;
    }, 350);
}