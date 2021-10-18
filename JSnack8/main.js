// chiedi un numero di 4 cifre all'utente, poi sommale e stampa il risultato

//prompt
//charAt

let userNum = prompt("inserisci un numero di 4 cifre");
let sum = 0;

for (let i = 0; i < userNum.length; i++) {
    let cifra = userNum.charAt(i);
    sum += parseInt(cifra);
    
}
document.querySelector("h1").innerHTML = sum;

