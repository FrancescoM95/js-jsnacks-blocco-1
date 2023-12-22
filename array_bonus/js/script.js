console.log('JS OK');

//* ESERCIZIO 3
/* Descrizione:
- Crea due array che hanno un numero di elementi diversi.
- Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/


//Creo due array che hanno un numero di elementi diversi
let array1 = [5, 10, 15, 20];
let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Array1:", array1, "Array2:", array2);

// Calcolo la differenza di lunghezza tra gli array
const diffLength = Math.abs(array1.length - array2.length);

// Aggiungo elementi all'array più corto fino a quando entrambi gli array hanno la stessa lunghezza
for (let i = 0; i < diffLength; i++) {
    array1.length < array2.length ? array1.push(Math.floor(Math.random() * 100) + 1) : array2.push(Math.floor(Math.random() * 100) + 1)
}

console.log("Array1:", array1, "Array2:", array2);