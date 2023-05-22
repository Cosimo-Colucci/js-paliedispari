/**
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

 */

let userChoice = prompt ("Pari o Dispari");
const userNumber = parseInt (prompt ("Scegli un numero da 1 a 5"));
let pcNumber = randomNumber(1, 5);

if (userChoice === "pari" && ((userNumber.valueOf + pcNumber / 2) === 0)) {
    userChoice = true;
}   else if (userChoice === "dispari" && ((userNumber.valueOf + pcNumber / 2) === 0)) {
    userChoice = false;
}   else userChoice = "Your choise is not correct";









function randomNumber (minN, maxN) {
    const randomNumber = Math.floor ( Math.random() * (maxN - minN) + 1);
    return randomNumber;
}

console.log (userChoice);
console.log (randomNumber(1, 5));