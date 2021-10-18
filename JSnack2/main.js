const word1 = prompt("Scrivi una parola qualsiasi");
const word2 = prompt("Scrivi un'altra parola qualsiasi");

if (word2.length > word1.length) {
    document.querySelector("h1").innerHTML = `${word2} ${word1}`;
} else  {
    document.querySelector("h1").innerHTML = `${word1} ${word2}`;
}