'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  console.log('> ' + getRandomNumber(100));

  //al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

  let buttonEl=document.getElementById('player__button');
  let inputEl=document.getElementById('player__input');

  function handlerAccessToInputAndShowItInConsole(event){
      buttonEl=event.currentTarget;
      console.log(inputEl.value);
  }
  buttonEl.addEventListener('click', handlerAccessToInputAndShowItInConsole);


//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el
//feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS
//GANADO, CAMPEONA!")

function compareInputNumberWithRandomNumberAndPaintItInConsole () {
if ( getRandomNumber < inputEl.value) {
    console.log('Demasiado alto');
}
else if (inputEl.value < getRandomNumber) {
    console.log ('Demasiado bajo');
}
else if (inputEl.value === getRandomNumber) {
    console.log ('¡HAS GANADO, CAMPEONA!');
}
} 

compareInputNumberWithRandomNumberAndPaintItInConsole ();