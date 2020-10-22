// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chidere allutente la sua mailutente
var mailUtente;

// definire lista d mail che permetto l'accesso
var mailAccesso = ["ferrari288gto@gmail.com", "mclarenf1@gmail.com", "lamborghinidiablo@gmail.com", "jaguarxj220@gmail.com"];

// controllare che la mail inserita dall'utente sia valida
var bottoneverifica = document.getElementById('bottoneverifica');

bottoneverifica.addEventListener('click',
 function() {

   var mailPeraccesso = false;

   mailUtente = document.getElementById('mailutente').value;

   // stampare un messaggio
   for (var i = 0; i < mailAccesso.length; i++) {

     if (mailUtente === mailAccesso[i]) {
       mailPeraccesso = true;
     }
   }

   if (mailPeraccesso === true) {
     alert("accesso consentito");

   } else {
     alert("accesso non consentito");
   }

} );
