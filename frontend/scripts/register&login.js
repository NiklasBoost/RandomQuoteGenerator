document.querySelector('.signUp-button-js')
  .addEventListener('click', () => {
    openFormular('register');
  });

document.querySelector('.login-button-js')
  .addEventListener('click', () => {
    openFormular('login');
  });


// JUST FOR TESTING
document.querySelector('.js-just-test-connection')
  .addEventListener('click', () => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify('Just tests')
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log('Response Body:' + result);
    })
    .catch((error) => {
      console.error('Fehler beim Senden der Daten:', error);
    });
  });

function openFormular(form) {
  const register = document.querySelector('.formular-register');
  const login = document.querySelector('.formular-login');
  if (form === 'register') {
    register.style.display = "block";
  } else if(form === 'login'){
    login.style.display = "block";
  }
}

document.querySelector('.close-button-js')
  .addEventListener('click', () => {
    closeFormular();
  });

function closeFormular(form) {
  const formular = document.querySelector('.form');
  formular.style.display = "none";
}

document.querySelector('.register-button-js')
  .addEventListener('click', () => {
    sendRegisterDataToDatabase();
  });

function sendRegisterDataToDatabase() {
  const eMail = document.querySelector('.input-e-mail-js').value;
  const username = document.querySelector('.input-username-js').value;
  const password = document.querySelector('.input-password-js').value;
  const password2 = document.querySelector('.input-password2-js').value;

  const data = {
    Email: eMail,
    Benutzername:username,
    Passwort: password
  }
  const mailTest = checkMail();
  const passwordTest = checkPassword();
 
  if (mailTest && passwordTest) {
    // console.log('Daten werden ans Backend geliefert'); 

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Typ': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
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