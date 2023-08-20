let allQuotes = [];
let currentQIndex = displayQuote();
let editButton = false;
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

function addQuote() {
  const newQuote1 = document.querySelector('.input-field');
  const newQuote = document.querySelector('.input-field').value;
  allQuotes.push(newQuote);   
  const allQuotesJASON = JSON.stringify(allQuotes);
  localStorage.setItem('quotes', allQuotesJASON);
  newQuote1.value = '';
}

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

function editQuote() {
  const container = document.getElementById('output');
  container.contentEditable = true;
  container.focus();
}

function saveChanges() {
  const container = document.getElementById('output');
  container.contentEditable = false;
  const editedQuote = container.innerHTML;
  allQuotes[currentQIndex] = editedQuote;
}

document.querySelector('.edit-button-js')
.addEventListener('click', () => {
  if (editButton === false) {
    editQuote();
    document.querySelector('.edit-button-js').innerHTML = 'save it';
      editButton = true;
    } else if (editButton === true) {
      saveChanges();
      document.querySelector('.edit-button-js').innerHTML = 'edit';
      editButton = false;
    }
  });
  
document.querySelector('.next-quote-js')
  .addEventListener('click', () => {
    nextQuote(outputDiv);
  });

document.querySelector('.add-button')
  .addEventListener('click', () => {
    addQuote();
  })

document.querySelector('.remove-button')
  .addEventListener('click', () => {
    removeQuote(currentQIndex)
  });

document.querySelector('.help-button')
  .addEventListener('click', () => {
    console.log(allQuotes);
  })