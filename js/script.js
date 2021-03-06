/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

  



/*** 
This is the quotes variable with an array of objects that will be generated. 
***/

let quotes = [
  {
    quote:"The journey of a thousand miles begins with one step.",
    source: "Lao Tzu"
  },
  {
    quote:"You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi"
  },
  {
    quote:"If you’re going through hell, keep going.",
    source: "Winston Churchill"
  },
  {
    tag: "humor",
    quote:"Life is like a box of chocolates. You never know what you’re going to get.",
    source: "Forrest Gump",
    year: 1994,
    citation: "Forrest Gump"
  },
  {
    quote:"It always seems impossible until it’s done.",
    source: "Nelson Mandela",
    year: 2001
  },
  {
    quote:"It is never too late to be what you might have been.",
    source: "George Eliot",
    year: 1881
  },
  {
    quote:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    source: "Bil Keane",
    year: 1994
  },

];

/***
This function uses the the array's index to return a random quote from quotes array of objects.
***/
getRandomQuote = (array) => {
  let randomNumQuote = Math.floor( Math.random() * array.length );
  return array[randomNumQuote];
};

getRandomColor = () => {
  let randomColor = 'rgb('+Math.round(Math.random()*188)+','+Math.round(Math.random()*188)+','+Math.round(Math.random()*188)+','+.8+')';
     return randomColor;
};

/***
The printQuote function calls the getRandomQuote function and stores that in a variable
that variable is used in the string that is added to the paragraph element in the html file.
Along with conditionals to concatenate citation and year to be displayed in the browser also.
***/

let finalRandomQuote ='';
let finalRanCol = '';
let htmlStr = '';

 printQuote = () => {
    finalRanCol = getRandomColor();
    finalRandomQuote = getRandomQuote(quotes);
    htmlStr = `
    <p class="quote"> ${finalRandomQuote.quote} </p>
    <p class="source"> ${finalRandomQuote.source}
    `

    if (finalRandomQuote.citation) {
      htmlStr += `<span class="citation">${finalRandomQuote.citation}</span>`;
    }
  
    if (finalRandomQuote.year) {
      htmlStr += `<span class="year">${finalRandomQuote.year}</span>`;
    }

    if (finalRandomQuote.tag) {
      htmlStr += `<p class="tag">${finalRandomQuote.tag}</p>`;
    }

    htmlStr += `</p>`;

    document.getElementById('quote-box').innerHTML = htmlStr;
    document.body.style.backgroundColor = finalRanCol;
};
printQuote()

setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);