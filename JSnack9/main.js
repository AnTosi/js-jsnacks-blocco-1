// calcola la somma e la media dei primi 10 numeri

//ciclo for fino a 10 già restituisce i primi 10 numeri, basta mettere le operazioni con i dentro
//metto <= perché penso includa 10 e non zero, altrimenti avrei potuto mettere < 10 
let sum = 0;

for (let i = 0; i <= 10; i++) {
    sum += i;
    mean = sum / 10;
}

document.querySelector("h1").innerHTML = `La sommatoria dei primi dieci numeri è ${sum}, la media dei primi dieci numeri è ${mean}`