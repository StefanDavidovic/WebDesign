var EditBook = document.getElementById("EditBook");
var button = EditBook.btn_submit;

button.addEventListener('click', function(e){
    var ime = document.getElementById('ime').value;
    var isbn = document.getElementById('isbn').value;
    var adresa = document.getElementById('adresa').value;
    var autor = document.getElementById('autor').value;
    var jezik = document.getElementById('jezik').value;
    var povez = document.getElementById('povez').value;
    var pismo = document.getElementById('pismo').value;
    var datum = document.getElementById('datum').value;
    var ocena = document.getElementById('ocena').value;
    var cena = document.getElementById('cena').value;
    var brStrana = document.getElementById('brStrana').value;
    var opis = document.getElementById('opis').value;
    var slika = 'slike/' + document.getElementById("slika").files[0].name; 



    var firebaseConfig = {
        apiKey: "AIzaSyDgKP_Dt1-5h5DAndcREBknkVzyJZR41Zo",
        authDomain: "knjizara-firebase.firebaseapp.com",
        databaseURL: "https://knjizara-firebase-default-rtdb.firebaseio.com",
        projectId: "knjizara-firebase",
        storageBucket: "knjizara-firebase.appspot.com",
        messagingSenderId: "468985595360",
        appId: "1:468985595360:web:1ff435e789d75503a7d785"
        };
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
    var ref = database.ref('books');

    var data = {
        ime: ime,
        isbn: isbn, 
        adresa: adresa,
        autor: autor,
        jezik: jezik,
        povez: povez,
        pismo: pismo, 
        datum: datum,
        ocena: ocena,
        cena: cena,
        brStrana: brStrana,
        opis: opis,
        slika: slika
    }
    ref.push(data);
    e.preventDefault()

});
