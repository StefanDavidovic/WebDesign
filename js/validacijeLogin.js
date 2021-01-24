var popWin = document.getElementById("popup");
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var EditUser = document.getElementById("EditUser");
var btn = document.getElementById("btn_submit"); 


 LoginForm.addEventListener('submit', (e) => {
    if(LoginForm.sifra.value == "" && LoginForm.korisnickoIme.value == ""){
        alert("Molimo unesite korisnicko ime i lozinku");
        popWin.style.display = "grid";
        LoginForm.sifra.style.border = "1px solid red";
        LoginForm.korisnickoIme.style.border = "1px solid red";
        e.preventDefault()
    }

    else if(LoginForm.korisnickoIme.value == "") {
        alert("Molimo unesite korisnicko ime");
        LoginForm.korisnickoIme.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(LoginForm.sifra.value == "") {
        alert("Molimo unesite lozinku");
        LoginForm.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(LoginForm.sifra.value == "") {
        alert("Molimo unesite lozinku");
        LoginForm.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(LoginForm.sifra.value.length < 4 ) {
        alert("Lozinka mora biti veca od 4");
        LoginForm.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(LoginForm.sifra.value == "" || LoginForm.korisnickoIme.value == ""){
        popWin.style.display = "grid";
        e.preventDefault()
    }
    else{
        popWin.style.display = "none";
        e.preventDefault()
    }
 });

 RegForm.addEventListener('submit', (e) => {
    if(RegForm.sifraR.value == "" && RegForm.korisnickoImeR.value == "" && RegForm.email.value == "" && RegForm.prezime.value == "" && RegForm.ime.value == ""){
        alert("Molimo unesite podatke");
        RegForm.sifraR.style.border = "1px solid red";
        RegForm.korisnickoImeR.style.border = "1px solid red";
        RegForm.email.style.border = "1px solid red";
        RegForm.prezime.style.border = "1px solid red";
        RegForm.ime.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(RegForm.ime.value == "") {
        alert("Molimo unesite ime");
        RegForm.ime.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(RegForm.prezime.value == "") {
        alert("Molimo unesite prezime");
        RegForm.prezime.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(RegForm.email.value == "") {
        alert("Molimo unesite email");
        RegForm.email.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(RegForm.korisnickoImeR.value == "") {
        alert("Molimo unesite korisnicko ime");
        RegForm.korisnickoImeR.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(RegForm.sifraR.value == "") {
        alert("Molimo unesite lozinku");
        RegForm.sifraR.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(RegForm.sifraR.value.length < 4 ) {
        alert("Lozinka mora biti veca od 4");
        RegForm.sifraR.style.border = "1px solid red";
        e.preventDefault()
    }
    if(RegForm.sifraR.value == "" || RegForm.korisnickoIme.value == "" || RegForm.email.value == "" || RegForm.prezime.value == "" || RegForm.ime.value == ""){
        popWin.style.display = "grid";
        e.preventDefault()
    }
    else{
        popWin.style.display = "none";
        e.preventDefault()
    }
 });


