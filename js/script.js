// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
//   stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere
//   un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$( document ).ready(function() {
    //alert('ciao'); //Verifica collegamenti
    var studente = {
        "nome" : Tizio
        "cognome" : De Tizis
        "eta" : 21
    }

    for (var k in studente) {
        console.log(studente[k]);
    }
});
