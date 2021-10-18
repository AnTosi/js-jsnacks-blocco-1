// chiedo 10 numeri, li sommo e restituisco la stampa della somma

//strumenti:
//let per assegnare l'array, inizializzo sum 
//Number per verificare che quello inserito sia un numero (parseInt non mi andava ma forse era solo perché incasinavo qualcosa io)
//ciclo for per ripetere 10 volte il prompt invece di scriverlo 10 volte io
//prompt per fare la domanda 
//push per aggiungere il valore iesimo all'array nums ad ogni ciclo
//+= per fare la sommatoria
//query selector as usual per stampare in pagina il risultato



//query selector per stampare nell'h1 il risultato
//

let nums = [];
sum = 0;

for (let i = 0; i < 10; i++) {
    nums.push(Number(prompt("scrivi un numero a tua scelta")));
    sum += nums[i];
    
}

document.querySelector("h1").innerHTML = sum;