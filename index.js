'use strict'

const email = document.querySelector('.emailBtn');
email.addEventListener('click', function() {
    window.open("mailto:[romina.mahinpei@yahoo.com]");
});

const quotes = ["The way to get started is to quit talking and begin doing. -Walt Disney", 
                "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
                "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
                "It is during our darkest moments that we must focus to see the light. -Aristotle",
                "Life is either a daring adventure or nothing at all. -Helen Keller",
                "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking. -Steve Jobs",
                "Love the life you live. Live the life you love. -Bob Marley",
                "Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
                "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
                "If you really look closely, most overnight successes took a long time. -Steve Jobs",
                "The question isn't who is going to let me; it's who is going to stop me. -Ayn Rand",
                "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson"];

const quote = document.querySelector('.quoteBtn');
quote.addEventListener('click', function() {
    var i = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[i];
    
});
