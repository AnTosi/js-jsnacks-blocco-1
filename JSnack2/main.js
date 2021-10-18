// chiedo due parole, le confronto e stampo la più lunga prima e la più corta dopo

//strumenti:
//const per assegnare le variabili
//.length per calcolare lunghezza parole
//if ed else per confrontare la lunghezza delle parole
//query selector per stampare nell'h1 il risultato
//backtick e ${} per scrivere le variabili


const word1 = prompt("Scrivi una parola qualsiasi");
const word2 = prompt("Scrivi un'altra parola qualsiasi");

if (word2.length > word1.length) {
    document.querySelector("h1").innerHTML = `${word2} ${word1}`;
} else  {
    document.querySelector("h1").innerHTML = `${word1} ${word2}`;
}