var myFormR = document.getElementById('RegForm');
var myFormL = document.getElementById('LoginForm');
var buttonR = myFormR.btn_submit;
var buttonL = myFormL.btn_submit;

buttonR.addEventListener('click', function(e){
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var email = document.getElementById('email').value;
    var korisnickoIme = document.getElementById('korisnickoImeR').value;
    var lozinka = document.getElementById('sifraR').value;

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
    // if (!firebase.apps.length) {
    //     firebase.initializeApp({});
    //  }else {
    //     firebase.app(); // if already initialized, use that one
    //  }

    var database = firebase.database();
    var ref = database.ref('users');

    var data = {
        ime: ime,
        prezime: prezime, 
        email: email,
        korisnickoIme: korisnickoIme,
        lozinka: lozinka
    }
    console.log(data);
    ref.push(data);
    e.preventDefault()

});


buttonL.addEventListener('click', function(e){
        var firebaseConfig = {
        apiKey: "AIzaSyDgKP_Dt1-5h5DAndcREBknkVzyJZR41Zo",
        authDomain: "knjizara-firebase.firebaseapp.com",
        databaseURL: "https://knjizara-firebase-default-rtdb.firebaseio.com",
        projectId: "knjizara-firebase",
        storageBucket: "knjizara-firebase.appspot.com",
        messagingSenderId: "468985595360",
        appId: "1:468985595360:web:1ff435e789d75503a7d785"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }

    var database = firebase.database();
    var ref = database.ref('users');
    ref.on('value', gotData, errData);




});

function gotData(data){
    var korisnickoImeL = document.getElementById('korisnickoIme').value;
    var lozinkaL = document.getElementById('sifra').value;
    var scores = data.val();
    var keys = Object.keys(scores);

    for (var i = 0; i< keys.length; i++){
        var k = keys[i]
        var korisnickoIme = scores[k].korisnickoIme;
        var lozinka = scores[k].lozinka;

        if(korisnickoImeL == korisnickoIme && lozinkaL == lozinka){
            console.log(scores[k]);
            return scores[k];
        }
        else{
            // alert("Pogresno korisnicko ime ili lozinka")
            // e.preventDefault()
        }
    }
}

function errData(err){
    console.log("Error!")
    console.log(err);
}

