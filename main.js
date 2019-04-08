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


