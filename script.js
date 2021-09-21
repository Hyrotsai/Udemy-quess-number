'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Numero correcto!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;
console.log(document.querySelector('.number').textContent);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreNumber = Number(document.querySelector('.score').textContent);
let tempScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//funcionabilidad del boton check
document.querySelector('.check').addEventListener('click', function () {
  const quess = Number(document.querySelector('.guess').value);

  //cuando no hay valor
  if (!quess) {
    //document.querySelector('.message').textContent = 'No numero 😢';
    displayMessage('No numero 😢');

    //Cuando el jugador gana
  } else if (quess === secretNumber) {
    document.querySelector('.message').textContent = 'Numero es correcto! 🐼';
    document.querySelector('.highscore').textContent = scoreNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.number').textContent = secretNumber;

    //validador puntaje mas alto
    if (tempScore > scoreNumber) {
      document.querySelector('.highscore').textContent = tempScore;
    }
    tempScore = scoreNumber;

    // Cuando quess esta equivocado
  } else if (quess !== secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        quess > secretNumber
          ? 'Numero es muy alto! 🐱‍🚀'
          : 'Numero es muy bajo! 🐱';
      document.querySelector('.score').textContent = scoreNumber - 1;
      scoreNumber--;
    } else {
      document.querySelector('.message').textContent = 'Perdiste! 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
    // Cuando el numero es mayor
  } else if (quess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        'Numero es muy alto! 🐱‍🚀';
      document.querySelector('.score').textContent = scoreNumber - 1;
      scoreNumber--;
    } else {
      document.querySelector('.message').textContent = 'Perdiste! 😢';
      document.querySelector('.score').textContent = 0;
    }

    // Cuando el numero es menor
  } else if (quess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = 'Numero es muy bajo! 🐱';
      document.querySelector('.score').textContent = scoreNumber - 1;
      scoreNumber--;
    } else {
      document.querySelector('.message').textContent = 'Perdiste! 😢';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Comenzando...';
  document.querySelector('.score').textContent = '20';
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = 0;
});
console.log(14 > 2 ? `Gano el 1` : `Gano el 2`);
