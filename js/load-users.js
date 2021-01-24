function loadUsers(e){
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
};

function gotData(data){

    var scores = data.val();
    var keys = Object.keys(scores);

    for (var i = 0; i< keys.length; i++){
        var k = keys[i]
        
        var slikaK = "slike/account.png"
        var imeK = scores[k].ime;
        var korisnickoIme = scores[k].korisnickoIme;
        var prezime = scores[k].prezime;
        var tip = "Administrator";
        var edit = 'slike/edit.png';
        var kanta = 'slike/kanta.png';

        console.log(imeK, korisnickoIme, prezime, tip, edit, kanta)

        var mainDiv = document.getElementById("mainDiv");
        var userTable = document.getElementById("userTable");

        var tr =  document.createElement('tr');
        var td = document.createElement('td');
        tr.appendChild(td);
        
        userTable.appendChild(tr);

        var div1 = document.createElement('div');
        div1.className = 'cart-info';
        td.appendChild(div1);

        var slika = document.createElement('IMG');
        slika.setAttribute('src', slikaK);
        slika.style.width = '100px';
        div1.appendChild(slika);

        var div2 = document.createElement('div');
        div1.appendChild(div2);
        var p = document.createElement('p');
        p.innerHTML = imeK;
        div2.appendChild(p)

        var small = document.createElement('small');
        small.innerHTML = '<i>' + prezime + '</i>' + '<br>'
        div2.appendChild(small)

        var small2 = document.createElement('small');
        small2.innerHTML = '<i>' + korisnickoIme + '</i>'
        div2.appendChild(small2)

        var td2 = document.createElement('td');
        td2.innerHTML= tip;
        td2.style.textAlign = 'left'
        tr.appendChild(td2);

        var td3 = document.createElement('td');
        var a = document.createElement('a');
        a.setAttribute('href', '#')
        td3.appendChild(a);
        var img1 = document.createElement('IMG');
        img1.setAttribute('src', edit);
        img1.setAttribute('id', 'edit');
        a.appendChild(img1);

        var a1 = document.createElement('a');
        a1.setAttribute('href', '#')
        var img2 = document.createElement('IMG');
        img2.setAttribute('src', kanta);
        img2.setAttribute('id', 'kanta');
        a1.appendChild(img2);
        td3.appendChild(a1);
        tr.appendChild(td3)

        var kanta = document.getElementById('kanta');
    }
    var kanta = document.getElementById('kanta');
    kanta.addEventListener('click', function(e){
    if(confirm('Da li zelite da obrisete korisnika?')){
        console.log("Korisnik je obrisan")
    }
    else{
        console.log("Brisanje otkazano")
        return false;
    }
});

}

function errData(err){
console.log("Error!")
console.log(err);
}


loadUsers()


