// stampa le potenze di due fino a 1000
// potrebbe essere interpretato in 2 modi, quello che ritengo più probabile è vedere se il risultato di  2 ^ n è minore di 1000 e in tal caso continuo, altrimenti no

//strumenti: 
//ciclo while
//math.pow

n = 0;
elevated = 0;

while (Math.pow(2,n) < 1000) {
    n++;
    let elevated = Math.pow (2, n);
    if (elevated < 1000) {
        document.querySelector("h1").insertAdjacentHTML("beforeend", ` ${elevated}`);
    }
    
}

// il browser non me lo carica, non so se perché sbaglio io o perché è il browser