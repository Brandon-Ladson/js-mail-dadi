// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// numero dell'utente
var lancioUtente;

// numero del computer
var lancioCumputer;

// premere bottone per lanciare il dado
var bottone = document.getElementById('bottonelancio');

bottone.addEventListener('click',
 function() {

   lancioUtente = Math.floor(Math.random() * 6) + 1;

   lancioCumputer = Math.floor(Math.random() * 6) + 1;

   if (lancioUtente > lancioCumputer) {
     document.getElementById('risultato').innerHTML = "HAI VINTO!"

   } else if (lancioCumputer > lancioUtente) {
     document.getElementById('risultato').innerHTML = "HAI PERSO!"

   } else {
     document.getElementById('risultato').innerHTML = "PAREGGIO!"
   }

   document.getElementById('miorisultato').innerHTML = "Hai fatto: " + lancioUtente;

   document.getElementById('risultatopc').innerHTML = "Il PC ha fatto: " + lancioCumputer;

} );
// definire il vincitore
