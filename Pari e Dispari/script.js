//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri.
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
//Dichiariamo chi ha vinto.


//prompt per scelta numero e pari o dispari 
const numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5:'));
const giocataGiocatore = prompt('PARI O DISPARI?');

const numeroComputer = randomNumber;
console.log(numeroComputer);

function randomNumber(numero){
   Math.floor(Math.random() * 5) + 1;
}