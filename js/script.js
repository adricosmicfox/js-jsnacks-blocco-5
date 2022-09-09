/* SNACK 1*/

/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/






// SVOLGIMENTO 

// SNACK 1

const footballTeams = [

    {
        nome: "roma",
        gol: 0,
        falli: 0,
    },

    {
        nome: "lazio",
        gol: 0,
        falli: 0,
    },

    {
        nome: "milan",
        gol: 0,
        falli: 0,
    }

]

for (let i = 0; i < footballTeams.length; i++) {

    const match = footballTeams[i];

    const golNumber = parseInt(Math.random() * 10);

    const falliNumber = parseInt(Math.random() * 10);

    match.gol = golNumber;

    match.falli = falliNumber;

}

console.log(footballTeams);



// SNACK 2

/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */



const numeri = [1, 34, 56, 43, 67, 98, 35];

function myFunction(a, b, ...numeri) {

    const nuovoArray = numeri.filter((element, i) => {

        if (i >= a && i <= b) {
            return true;
        }
    })
    return nuovoArray;
}

let number = myFunction(1, 5, ...numeri)
console.log(number);




/* SNACK 3*/

/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


const zucchine = [

    {
        peso: 13,
        lunghezza: 89,
    },

    {
        peso: 3,
        lunghezza: 8,
    },

    {
        peso: 2,
        lunghezza: 3,
    },

    {
        peso: 5,
        lunghezza: 6,
    },

    {
        peso: 4,
        lunghezza: 27,
    },

    {
        peso: 34,
        lunghezza: 12,
    },

    {
        peso: 1,
        lunghezza: 19,
    },

    {
        peso: 99,
        lunghezza: 99,
    },

    {
        peso: 23,
        lunghezza: 13,
    },

    {
        peso: 1,
        lunghezza: 10,
    },
]

const zucchineGrandi = [];
const zucchinePiccole = [];

for (let i = 0; i < zucchine.length; i++) {
    const lunghezzaZucchina = zucchine[i].lunghezza;
    if (lunghezzaZucchina > 15) {
        zucchineGrandi.push(zucchine[i]);
    }

    else {
        zucchinePiccole.push(zucchine[i]);
    }
}


let pesoZucchineGrandi = 0;
let pesoZucchinePiccole = 0;

zucchineGrandi.forEach(element => {
    pesoZucchineGrandi += element.peso;
});

console.log(pesoZucchineGrandi);

zucchinePiccole.forEach(element => {
    pesoZucchinePiccole += element.peso;
});
console.log(pesoZucchinePiccole);
