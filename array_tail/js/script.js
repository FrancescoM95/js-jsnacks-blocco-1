console.log('JS OK');

//* ESERCIZIO 2
/* Descrizione:
- Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
- Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
- Chiediamo all'utente quanti elementi dell'array dovremo stampare
*/

// Chiediamo all'utente quanti elementi inserire nell'array
const userNumber = parseInt(prompt("Inserisci un numero di elementi"));

// Chiediamo all'utente quanti elementi dell'array dovremo stampare
const userPrint = parseInt(prompt("Quanti elementi stamperemo?"));

// Verifichiamo se l'input dell'utente è un numero valido
if (isNaN(userNumber) || userNumber <= 0 || isNaN(userPrint) || userPrint <= 0 || userPrint > userNumber) {
    alert("Inserisci un numero valido di elementi da stampare.");
    location.reload()
} else {
    // Creiamo l'array e generiamo numeri casuali per ogni elemento
    const array = [];
    for (let i = 0; i < userNumber; i++) {
        const numeroRandom = Math.floor(Math.random() * 100) + 1;
        array.push(numeroRandom);
    }
    // Stampiamo poi gli elementi dell'Array che ha chiesto l'utente
    const print = array.slice(0, userPrint);
    console.log("Gli elementi dell'array sono:", array);
    console.log("Gli elementi dell'array che hai scelto di stampare sono:", print);
}