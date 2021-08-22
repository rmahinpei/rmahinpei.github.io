'use strict'

const email = document.querySelector('.emailBtn');
email.addEventListener('click', function() {
    window.open("mailto:[romina.mahinpei@yahoo.com]");
});

const quotes = ["Your attitude determines your altitude.",, 
                "Practice like you’ll play.",
                "Fail early, learn quickly.",
                "Nothing worth having comes easy.",
                "Work hard in silence and let your success be your noise."];

const quote = document.querySelector('.quoteBtn');
quote.addEventListener('click', function() {
    var i = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[i];
    
});
