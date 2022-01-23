const quotes = [
    {
        quote: "The world is full of suffering but it is also full of people overcoming it.",
        author: "Helen Keller",
    },
    {
        quote: "Quality is more important than quantity. One home run is much better than two doubles.",
        author: "Steve Jobs",
    },
    {
        quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein", 
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius",
    },
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
        author: "Warren Buffett",
    },
    {
        quote: "If you don't learn to laugh at trouble, you won't have anything to laugh at when you're old.",
        author: "Edgar Watson Howe",
    },
    {
        quote: "I'd rather be hated for who I am than be loved for who I'm not.",
        author: "Kurt Cobain"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;