// Mail-------------------------------------------------

//Chiedo all’utente la sua email con un prompt
var userMail = prompt('inserisci la tua mail');

//Creo un array con le mail già registrate
var registeredMail = ['topolino@gmail.com', 'paperino@gmail.com', 'minni@gmail.com', 'paperina@gmail.com', 'pippo@gmail.com', 'pluto@gmail.com', 'cip@gmail.com', 'ciop@gmail.com', 'ziopaperone@gmail.com'];

// Creo una variabile con il mio output nell'html
var outputAccess = document.getElementById('access');

// creo una variabile che diventa true quando trova la mail corrispondente
var check = false; 

// cerco nell'array con un ciclo la corrispondenza con la userEmail
for (var i = 0; i < registeredMail.length; i++) {
    if (registeredMail[i] === userMail){
        check = true; // Diventa true una volta trovarta la corrispondenza
        break; // esce dal ciclo una volta trovata la prima corrispondenza
    }
}

//scrivo nell'HTML l'esito della ricerca 
document.getElementById('es1').innerHTML = 'Esercizio 1 - Mail'; 

if (check) {
    outputAccess.innerHTML = 'Accesso Autorizzato';
} else {
    outputAccess.innerHTML = 'Accesso Negato, il tuo indirizzo "' + userMail + '" non è in elenco';
}



//Gioco dei dadi -------------------------------------------------

// Genero un numero random da 1 a 6, sia per il giocatore sia per il computer
var randomNumberUman = Math.floor(Math.random()*6) + 1;
var randomNumberMachine = Math.floor(Math.random()*6) + 1;

var outputResult = document.getElementById('result');

//Stabilisco il vincitore, in base a chi fa il punteggio più alto.
document.getElementById('es2').innerHTML = 'Esercizio 2 - Dadi'; 

if (randomNumberUman > randomNumberMachine){
    outputResult.innerHTML = "Il vincitore è l'umano con " + randomNumberUman + ", contro " + randomNumberMachine + " della macchina";
} else if (randomNumberUman < randomNumberMachine){
    outputResult.innerHTML = "Il vincitore è la macchina con " + randomNumberMachine + ",  contro " + randomNumberUman + " dell'umano";
} else {
    outputResult.innerHTML = "lutente e la macchina hanno lo stesso numero, " + randomNumberUman + " umano, " + randomNumberMachine + " macchina";
}