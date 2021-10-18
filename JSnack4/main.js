// lista invitati in un array, chiedo nome e vedo se è in lista

//strumenti
//dichiaro array
//prompt per inserire nome
//uso if includes (più veloce del ciclo, sorry) per vedere se presente in lista
//uso il metodo toLowerCase () per accertarmi di trovare lo user indipendentemente dalla capitalizzazione utilizzata
//e il buon vecchio querySelector("h1") per stampare


let lista = ["gianni", "mario", "ghianda", "petronio", "bertuccia", "fabiola", "tiziano", "fabio"];

let userName = prompt(("Qual è il tuo nome?"));

if (lista.includes(userName.toLowerCase())) {

    //volevo mettere toUpperCase la prima lettera del nome e basta ma ho visto che era un po' un bordello e ho lasciato perdere, ho inserito il toLowerCase nella condizione in modo da restituire lo userName con la capitalizzazione utilizzata dall'utente
    document.querySelector("h1").innerHTML = `Prego ${userName}, puoi entrare`
} else {
    document.querySelector("h1").innerHTML = `Mi dispiace ${userName}, non puoi entrare`
}