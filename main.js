


// const num = Number(prompt("inserisci un numero:"));
// let somma = 0;

// for (let i = 1; i <= num; i++) {
//     somma = somma + i;
// }
// console.log("Somma da 1 a " + num + ": " + somma);

// let num = 5;
// let somma = 0;

// for (let i = 1; i <= num; i++) {
//     somma = somma + i;
// }
// console.log("Somma da 1 a " + num + ": " + somma);


// let num = 7;
// let somma = 1;

// for (let i = 1; i <= num; i++) {

//     somma = somma + i;
// }

// console.log("Somma da 1 a " + num + ": " + somma);



// const limite = 3;

// for (let i = 1; i <= limite; i++) {
//     const numero = Number(prompt("Inserisci il numero " + i + ":"));
//     console.log(numero + " al quadrato è " + numero * numero);
// }

// console.log("Numeri richiesti: " + limite);


const soglia = 18;

for (let i = 1; i <= 4; i++) {
    const voto = Number(prompt("Inserisci il voto " + i + ":"));

    if (voto >= soglia) {
        console.log(voto + ": sufficiente");
    } else {
        console.log(voto + ": insufficiente");
    }
}

console.log("Soglia di sufficienza: " + soglia);