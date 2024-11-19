// //Chiedere all'utente di inserire una parola.
// //Creare una funzione per capire se la parola inserita è palindroma.


// Prompt per chiedere all'utente di inserire una parola.
let parolaInserita = prompt("Inserisci una parola per verificare se è palindroma:");

//se, (richiamo la funzione e gli assegno la parola) la parola è palindroma.
if(isPalindroma(parolaInserita)){
   console.log(`la parola "${parolaInserita}", è palindroma.`);
} 
//altrimenti no.
else{
   console.log(`La parola "${parolaInserita}", non è palindroma.`);
}

// FUNZIONE
function isPalindroma(parola) {
   //salvo in una variaile la parola inserita, la splitto, la rovescio e la riunisco
   let parolaRovesciata = parola.split('').reverse().join('');
   //restituisco la parola, girata.
   return parola == parolaRovesciata
}
