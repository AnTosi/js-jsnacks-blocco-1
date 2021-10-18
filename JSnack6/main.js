// devo chiedere un numero allo user e stampare il cubo di ognuno dei numeri fino ad n 

//strumenti
//prompt 
//ciclo for per stampare i numeri da 1 a N e il loro cubo
//moltiplico i (che di fatto è la lista dei numeri da 0 a N) per i
//nel modo sopra funziona, provo con math.pow
//funziona anche con math.pow
//questa volta uso insertAdjacentHTML per stampare , così tanto per (anche se per questo procedimento è più veloce innerHTML)


const userNum = parseInt(prompt("Digita un numero"));
let allCubes = [];

for (let i = 0; i <= userNum; i++) {
    allCubes.push(Math.pow(i, 2));
    
    
}

console.log(allCubes);

document.querySelector("h1").insertAdjacentHTML("beforeend", `${allCubes}`);