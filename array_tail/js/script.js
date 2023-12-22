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

// Verifichiamo se l'input dell'utente è un numero valido
if (isNaN(userNumber) || userNumber <= 0) {
    console.log("Inserisci un numero valido di elementi.");
} else {
    // Creiamo l'array e generiamo numeri casuali per ogni elemento
    const array = [];
    for (let i = 0; i < userNumber; i++) {
        const numeroRandom = Math.floor(Math.random() * 100) + 1;
        array.push(numeroRandom);
    }
    // Stampiamo poigli ultimi 5 elementi dell'Array
    const print = array.slice(-5);
    console.table(array);
    console.log("Gli ultimi 5 elementi dell'array sono:", print);
}