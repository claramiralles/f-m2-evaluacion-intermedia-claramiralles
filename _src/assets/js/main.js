'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
const randomNumber= getRandomNumber(100);

  //al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

  const buttonEl=document.getElementById('player__button');
  const inputEl=document.getElementById('player__input');

  function handlerAccessToInputAndShowItInConsole(event){
      buttonEl=event.currentTarget;
      console.log(inputEl.value);
  }
  buttonEl.addEventListener('click', handlerAccessToInputAndShowItInConsole);


//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el
//feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS
//GANADO, CAMPEONA!")

function compareInputNumberWithRandomNumberAndPaintItInConsole () {
if ( randomNumber < parseInt(inputEl.value)){
    console.log('Demasiado alto');
}
else if (parseInt (inputEl.value) < randomNumber) {
    console.log ('Demasiado bajo');
}
else if (parseInst (inputEl.value) === randomNumber) {
    console.log ('¡HAS GANADO, CAMPEONA!');
}
} 

compareInputNumberWithRandomNumberAndPaintItInConsole ();
