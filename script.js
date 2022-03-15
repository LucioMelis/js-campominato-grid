console.log('JS Ok');

// creare una griglia di gioco quadrata,
// in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella,
// la cella cliccata si colora di azzurro.


// BONUS:
// L'utente indica un livello di difficoltà,
// in base al livello scelto la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49 (modificato) 

const griglia = document.getElementById('square');

const colonneGriglia = 10;
const righeGriglia = 10;

const celleTotali = colonneGriglia * righeGriglia;

for (let i = 0; i < celleTotali; i++) {
    let celle = document.createElement('div');
    celle.classList.add('cell-100');
    griglia.appendChild(celle);
    console.log(celle);
    celle.innerText = i + 1;
    celle.addEventListener('click', function () {
        celle.classList.toggle('cell-color');
    })
}

