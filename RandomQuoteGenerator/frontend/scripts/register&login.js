document.querySelector('.signUp-button-js')
  .addEventListener('click', () => {
    openFormular('register');
  });

document.querySelector('.login-button-js')
  .addEventListener('click', () => {
    openFormular('login');
  });


document.querySelector('.formular-close-button-js')
  .addEventListener('click', () => {
    closeFormular(); 
  });


document.querySelector('.close-button-js')
  .addEventListener('click', () => {
    closeFormular();
  });


document.querySelector('.register-button-js')
  .addEventListener('click', () => {
    sendRegisterDataToDatabase();
  });

document.querySelector('.goToQuotes-button-js')
  .addEventListener('click', () => {
    window.location.href = 'Quotes.html'; 
  });
  
function sendRegisterDataToDatabase() {
    
  console.log('Hello');
  
  const eMail = document.querySelector('.input-e-mail-js').value;
  const username = document.querySelector('.input-username-js').value;
  const password = document.querySelector('.input-password-js').value;
  
  const data = {
    Email: eMail,
    Benutzername:username,
    Passwort: password
  }
  const mailTest = checkMail();
  const passwordTest = checkPassword();
  
  
  if (mailTest && passwordTest) {
    console.log('Daten werden ans Backend geliefert'); 
    
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      window.location.href = 'Quotes.html'; 
      console.log(result);
    })
    .catch((error) => {
      console.error('Fehler beim Senden der Daten:', error);
    });
  }
  
}

function checkMail() {
  const eMail = document.querySelector('.input-e-mail-js').value;
  const aetAusdruck = /@/;
  const testAet = aetAusdruck.test(eMail);
  if (testAet) {
    return true;
  } else {
    console.log('Gebe eine korrekte Mail ein');
    return false;
  }
}

function checkUserName() {
  //check if it is in the database
}

function checkPassword() {
  const password = document.querySelector('.input-password-js').value;
  const password2 = document.querySelector('.input-password2-js').value;
  const nummerAusdruck = /\d/;
  const sonderzeichenAusdruck = /[!@#$%^&*(),.?":{}|<>]/;
  const testNumber = nummerAusdruck.test(password);
  const testSonderzeichen = sonderzeichenAusdruck.test(password);
  
  if (password === password2) {
    if (password.length >= 8) {
      const lowerCasePassword = password.toLowerCase();
      const upperCasePassword = password.toUpperCase();
      if (password !== lowerCasePassword) {
        if (password !== upperCasePassword) {
          if (testNumber) {
            if (testSonderzeichen) {
              return true;
            } else {
              console.log('Sonderzeichen fehlt');
              return false;
            }
          } else {
            console.log('Nummer fehlt');
            return false;
          }
        } else {
          console.log('Kleinbuchstabe fehlt');
          return false;
        }
      } else {
        console.log('Der Großbuchstabe fehlt');
        return false;
      }
    } else {
      console.log('Das Passwort muss länger sein');
      return false;
    }
  } else {
    console.log('Passwortwiederholung falsch');
    return false;
  }
}

function openFormular(form) {
  const register = document.querySelector('.formular-register');
  const login = document.querySelector('.formular-login');
  const registerDisplay = register.style;
  const loginDisplay = login.style;
  if (form === 'register') {
    console.log('formular geöffnet');
    if(loginDisplay.display === 'block') {
      console.log('login formular noch offen');
      loginDisplay.display = 'none';
    }
    register.style.display = "block";
  } else if(form === 'login'){
    if(registerDisplay.display === 'block') {
      registerDisplay.display = 'none';
    }
    login.style.display = "block";
  }
}

function closeFormular() {
  formular.style.display = "none";
}