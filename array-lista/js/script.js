console.log('JS OK');

//* ESERCIZIO 1
/* Descrizione:
- Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
- C'è anche una pesca sul tavolo: mettiamola nel frigo.
- Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
*/

//# FASI

//1. creare l'array con la frutta del frigorifero
const frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(frigo);

//2. aggiungere la pesca all'array della frutta
frigo.push('pesca');
console.log(frigo);

/*3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
*/
let found = false;

for (let i = 0; i < frigo.length && !found; i++) {
    if (frigo[i] === 'cocomero') {
        found = true
    }
    console.log(found);
}

const message = found ? "Trovato! Devo solo preparare il cocktail." : "Oh no, devo uscire a comprare il cocomero!";

console.log(message);