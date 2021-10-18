// chiedo due numeri, li confronto e stampo il più alto

//strumenti:
//const per assegnare le variabili
//parse int per verificare che quello inserito sia un numero (altrimenti ricade nell'else)
//prompt per richiedere inserimento all'utente
//if ed else per confrontare i numeri nei vari casi
//query selector per stampare nell'h1 il risultato
//backtick, virgolette e ${} per unire stringhe e variabili

const num1 = parseInt(prompt("Scrivi un numero da 1 a 10"));
const num2 = parseInt(prompt("Scrivi un altro numero da 1 a 10"));

if (num1 > num2) {
    console.log(num1);
    document.querySelector("h1").innerHTML = `Il numero più alto è ${num1}!`;
} else if (num2 > num1) {
    console.log(num2);
    document.querySelector("h1").innerHTML = `Il numero più alto è ${num2}!`;
} else {
    document.querySelector("h1").innerHTML = `Eppure non mi sembravano richieste difficili 🤔`
}

