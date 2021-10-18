//* creo array vuoto, chiedo all'utente un numero per 6 volte e se è dispari lo inserisco nell'array

//strumenti:
//array
//ciclo for
//prompt dentro al ciclo
// if dispari 
// modulus % per dispari
//push per inserirlo nell'array

let numList = [];

for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt("Digita un numero intero"));
    if (number % 2 != 0) {
        numList.push(number);
    } else continue
    
    console.log(numList);
}