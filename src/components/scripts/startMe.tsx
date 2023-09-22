import { displayQuote } from "./Quotesscript.tsx";

console.log('hello');

class quoteObject {
  quote: string;
  author: string;

  constructor(quote: string, author: string) {
    this.quote = quote;
    this.author = author;
  }
}

export let allQuotesObjects: quoteObject[] = [];
export const savedQuotesJSON: string | null = localStorage.getItem('quotes');
export const outputQuote: HTMLElement | null = document.getElementById('output-quote');
export const outputAuthor: HTMLElement | null = document.getElementById('output-author');
export const savedQuotes: quoteObject[] = savedQuotesJSON ? JSON.parse(savedQuotesJSON) : [];

setInterval(function() {
  if(outputQuote?.innerHTML === '' || outputAuthor?.innerHTML === '') {
    displayQuote();
  }
}, 2000);


