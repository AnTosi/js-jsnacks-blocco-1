const num1 = parseInt(prompt("Scrivi un numero da 1 a 10"));
const num2 = parseInt(prompt("Scrivi un altro numero da 1 a 10"));

if (num1 > num2) {
    console.log(num1);
    document.querySelector("h1").innerHTML = `Il numero più alto è ${num1}!`;
} else if (num2 > num1) {
    console.log(num2);
    document.querySelector("h1").innerHTML = `Il numero più alto è ${num2}!`;
} else {
    document.querySelector("h1").innerHTML = `Eppure non mi sembravano richieste difficili 🤔`
}

