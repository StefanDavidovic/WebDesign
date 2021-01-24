function loadBooks(e){
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
    var ref = database.ref('books');
    ref.on('value', gotData, errData);
};

function gotData(data){

    var scores = data.val();
    var keys = Object.keys(scores);



    for (var i = 0; i< keys.length; i++){
        var k = keys[i]
        
        var imeK = scores[k].ime;
        var cenaK = scores[k].cena;
        var slikaK = scores[k].slika;

        var glavniDiv = document.getElementById('glavniDiv')
        var knjigaDiv = document.createElement('div');
        glavniDiv.className = "row";
        glavniDiv.appendChild(knjigaDiv);
        knjigaDiv.className = "col-4";
        
        var srcSlike = document.createElement('IMG')
        srcSlike.setAttribute("src", slikaK);
        knjigaDiv.appendChild(srcSlike);
        
        var nazivKnjige = document.createElement("h4").innerHTML  = imeK;
        knjigaDiv.append(nazivKnjige);

        var cenaSpan = document.createElement('span');
        cenaSpan.innerHTML = '<br>' + "Cena: " +  cenaK;

    
        var paragraphCena = document.createElement('p').innerHTML = cenaSpan;  
        knjigaDiv.append(paragraphCena)
    }
    
}

function errData(err){
console.log("Error!")
console.log(err);
}

loadBooks()