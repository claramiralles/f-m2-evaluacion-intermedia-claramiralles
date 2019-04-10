'use strict';

let buttonEl=document.getElementById('player__button');
const inputEl=document.getElementById('player__input');
const randomNumber=getRandomNumber(100);
const guessNumber=parseInt (inputEl.value); 


const counterText=document.querySelector('.counter');
const counterEl= counter +=1;
const counter=counterText.innerHTML;
//arreglar el counter que esto no tiene lógica

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function handlerAccessToInputAndPaintIt(event){
    buttonEl = event.currentTarget;
    console.log(inputEl.value);
}
buttonEl.addEventListener('click', handlerAccessToInputAndPaintIt); 
//al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

function compareInputWithRandomAndPaintIt () {
if (randomNumber < guessNumber){
    console.log('Demasiado alto');
}
else if (guessNumber < randomNumber) {
    console.log ('Demasiado bajo');
}
else if (guessNumber === randomNumber) {
    console.log ('¡HAS GANADO, CAMPEONA!');
}
const userTries=compareInputWithRandomAndPaintIt ();

//Aqui estoy perdida. Mirar ejemplos de funciones e intentar solucionarlo. Si no ver ejercicio de Nasi a ver que me falta.
}




//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el
//feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS
//GANADO, CAMPEONA!")

