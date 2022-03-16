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


let richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
// variabile celleTotali + verifica richiesta utente 
let celleTotali = valoreCella(richiestaUtente);
// richiamo del div nell' HTML 
const griglia = document.getElementById('square');


// ciclo di controllo 
while (isNaN(richiestaUtente) || richiestaUtente > 3 || richiestaUtente < 1) {
    richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
}

// funzione celleTotali 
function valoreCella(richiesta) {
    if (richiesta === 1) {
        totaleCelle = 100;
    } else if (richiesta === 2) {
        totaleCelle = 81;
    } else {
        totaleCelle = 49;
    }
    return totaleCelle;
}

// utilizzo un ciclo for generare le celle 
for (let i = 0; i < celleTotali; i++) {

    let celle = document.createElement('div');

    if (celleTotali === 100) {
        celle.classList.add('cell-100');
    } else if (celleTotali === 81) {
        celle.classList.add('cell-81');
    } else {
        celle.classList.add('cell-49');
    }

    griglia.appendChild(celle);
    console.log(celle);
    celle.innerText = i + 1;
    celle.addEventListener('click', function () {
        celle.classList.toggle('cell-color');
    })
}

