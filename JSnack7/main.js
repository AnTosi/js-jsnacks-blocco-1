// stampa le potenze di due fino a 1000
// potrebbe essere interpretato in 2 modi, quello che ritengo più probabile è vedere se il risultato di  2 ^ n è minore di 1000 e in tal caso continuo, altrimenti no

//strumenti: 
//ciclo while
//math.pow

n = 0
elevated = Math.pow(2, n)

while (elevated < 10) {
    n++;
    document.querySelector("h1").insertAdjacentHTML("beforeend", elevated);
}