'use strict';

//Boton
const buttonEl = document.querySelector('.button');

//Texto jugador
const inputEl = document.querySelector('.input');

//Feedback juego
const feedbackEl = document.querySelector('.speaker');

//Contador
const counterEl = document.querySelector('.counter');

//crear un contador a 0
let counter = 0;

//Generar numero aleatorio y guardarlo en una constante
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//funcion - que hacer cuando se hace click en buttonEl

function handlerButtonClick () {
//recojo el valor que ha puesto el usuario y lo parseo de string a number para poder operar con el
  const inputText = parseInt(inputEl.value); 

  //comparo el numero aleaotorio con el numero puesto por el visitante
  if (randomNumber < inputText){
    feedbackEl.innerHTML = 'Demasiado alto';
  }
  else if (randomNumber > inputText) {
    feedbackEl.innerHTML = 'Demasiado bajo';
  }
  else if (inputText === randomNumber) {
    feedbackEl.innerHTML = '¡HAS GANADO, CAMPEONA!';
  }
  //Aumentar el contador y poner su valor dentro del elemento html contador
  counter += 1;
  counterEl.innerHTML = counter;
}

//escuchar click boton
buttonEl.addEventListener('click', handlerButtonClick);
