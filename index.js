'use strict'

const email = document.querySelector('.btn');
email.addEventListener('click', function() {
    window.open("mailto:[romina.mahinpei@yahoo.com]");
});

const img = document.querySelector('.img');
let backgroundCheck = "url('images/background.png')"; 
img.addEventListener('click', function() {
    if(backgroundCheck == "url('images/background.png')") {
        document.body.style.backgroundImage = "url('images/flowers.png')";
        backgroundCheck = "url('images/flowers.png')";
    } 
    else if (backgroundCheck == "url('images/flowers.png')") {
        document.body.style.backgroundImage = "url('images/hearts.png')";
        backgroundCheck = "url('images/hearts.png')";
    }
    else if (backgroundCheck == "url('images/hearts.png')") {
        document.body.style.backgroundImage = "url('images/spikes.png')";
        backgroundCheck = "url('images/spikes.png')";
    } 
    else {
        document.body.style.backgroundImage = "url('images/background.png')";
        backgroundCheck = "url('images/background.png')";
    }
});
