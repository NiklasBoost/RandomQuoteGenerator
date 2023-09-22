import { displayQuote } from "./Quotesscript";

console.log('hello');

class quoteObject {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }
}

export let allQuotesObjects = [];
export const savedQuotesJSON = localStorage.getItem('quotes');
export const outputQuote = document.getElementById('output-quote');
export const outputAuthor = document.getElementById('output-author');
export const savedQuotes = JSON.parse(savedQuotesJSON);

setInterval(function() {
  if(outputQuote.innerHTML === '' || outputAuthor.innerHTML === '') {
    displayQuote();
  }
}, 2000);


