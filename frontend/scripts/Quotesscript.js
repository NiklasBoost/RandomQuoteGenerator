let allQuotes = [];
const savedQuotesJSON = localStorage.getItem('quotes');
const outputDiv = document.getElementById("output");
const savedQuotes = JSON.parse(savedQuotesJSON);

setInterval(function() {
  if(outputDiv.innerHTML === '') {
    displayQuote();
  }
}, 2000);

function displayQuote() {
  if (savedQuotesJSON !== null) {
    allQuotes = savedQuotes;
  }
  let currentQIndex = 0;
  output.textContent = allQuotes[currentQIndex];

  return currentQIndex;
}

let currentQIndex = displayQuote();

function addQuote() {
  const newQuote1 = document.querySelector('.input-field');
  const newQuote = document.querySelector('.input-field').value;
  allQuotes.push(newQuote);   
  const allQuotesJASON = JSON.stringify(allQuotes);
  localStorage.setItem('quotes', allQuotesJASON);
  newQuote1.value = '';
}

document.querySelector('.next-quote-js')
  .addEventListener('click', () => {
    nextQuote(outputDiv);
  });

function nextQuote(output) {
  let lastIndex = allQuotes.length;
  if (currentQIndex === lastIndex) {
    currentQIndex = 0;
  } else {
    currentQIndex = Math.floor(Math.random() * allQuotes.length)
    output.textContent = allQuotes[currentQIndex];
  } 
}
function removeQuote(aIndex) {
  let thisIndex = aIndex - 1
  allQuotes.splice(thisIndex);
  output.textContent = allQuotes[currentQIndex];
}

document.querySelector('.edit-button-js')
  .addEventListener('click', () => {
    editQuote();
  });

function editQuote() {
  console.log(allQuotes[currentQIndex]);
  input = prompt('edit:');
  allQuotes[currentQIndex] = input;
  console.log(allQuotes);
}