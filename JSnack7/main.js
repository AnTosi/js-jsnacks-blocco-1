// stampa le potenze di due fino a 1000
// potrebbe essere interpretato in 2 modi, quello che ritengo più probabile è vedere se il risultato di  2 ^ n è minore di 1000 e in tal caso continuo, altrimenti no

//strumenti: 
//ciclo while
//math.pow

n = 0;
elevated = 0;

while (Math.pow(2,n) < 1000) {
    
    let elevated = Math.pow (2, n);
        document.querySelector("h1").insertAdjacentHTML("beforeend", ` ${elevated}`);
        n++;
}

// il browser non me lo carica, non so se perché sbaglio io o perché è il browser


//in questo modo non funziona, mi cicla all'infinito, credo che il problema sia nel fatto che mi calcola la n (e quindi la condizione) fuori dal ciclo quindi il ciclo non riceve mai la condizione false, perché non la calcola mai
// var n = 0;
// let elevated = Math.pow(2,n);

// while (elevated < 1000) {
    
//     // let elevated = Math.pow (2, n);
//         document.querySelector("h1").insertAdjacentHTML("beforeend", ` ${elevated}`);
//         n++;
// }