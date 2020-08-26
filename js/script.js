// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
//   stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere
//   un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function() {

    //***************ESERCIZIO 1
    //Creo oggetto
    var studente = {
        "nome" : "Tizio",
        "cognome" : "De Tizis",
        "eta" : 21
    };
    //Uso ciclo for in per stampare a schermo
    for (var k in studente) {
        console.log(studente[k]);
    };

    //***************ESERCIZIO 2
    // Creo array di oggetti
    var classe = [
        {
            "nome" : "Caio",
            "cognome" : "De Caius",
            "eta" : 20
        },
        {
            "nome" : "Sempronio",
            "cognome" : " De Sempronius",
            "eta" : 23
        },
        {
            "nome" : "Mevio",
            "cognome" : "De Mevius",
            "eta" : 24
        }
    ];
    // Uso ciclo for per stampare nome e cognome di ogni studente
    for (var i = 0; i < classe.length; i++){
        console.log(classe[i].nome + ' ' + classe[i].cognome);
    };

    //***************ESERCIZIO 3
    // Creo oggetto vuoto
    var studImm = {};
    // creo prompt con cui chiedere dati ad utente
    var name = prompt('Inserisci un nome');
    var surname = prompt('Inserisci un cognome');
    var age = ageF();
    // Inserisco dati in oggetto
    studImm.nome = name;
    studImm.cognome = surname;
    studImm.eta = age;
    // Stampo oggetto
    console.log(studImm);

    //*******FUNZIONI
    function ageF() {
        var age1 = prompt('Inserisci un età');
        while (isNaN(age1)) {
            age1 = prompt('Attenzione! Numero non valido. Inserisci un numero valido');
        }
        return age1;
    }
});
