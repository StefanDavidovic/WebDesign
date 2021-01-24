var EditUser = document.getElementById("EditUser");
var btn = document.getElementById("btn_submit"); 

EditUser.addEventListener('submit', (e) => {
    if(EditUser.sifra.value == "" && EditUser.korisnickoIme.value == "" && EditUser.email.value == "" && EditUser.prezime.value == "" && EditUser.ime.value == ""
    && EditUser.adresa.value == "" && EditUser.datum.value == "" && EditUser.brTelefona.value == ""){
        alert("Molimo unesite podatke");
        EditUser.sifra.style.border = "1px solid red";
        EditUser.korisnickoIme.style.border = "1px solid red";
        EditUser.email.style.border = "1px solid red";
        EditUser.prezime.style.border = "1px solid red";
        EditUser.ime.style.border = "1px solid red";
        EditUser.adresa.style.border = "1px solid red";
        EditUser.datum.style.border = "1px solid red";
        EditUser.brTelefona.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditUser.ime.value == "") {
        alert("Molimo unesite ime");
        EditUser.ime.style.border = "1px solid red";
        e.preventDefault()
        
    }
    else if(EditUser.prezime.value == "") {
        EditUser.prezime.style.border = "1px solid red";
        alert("Molimo unesite prezime");    
        e.preventDefault()
    }
    else if(EditUser.adresa.value == "") {
        EditUser.adresa.style.border = "1px solid red";
        alert("Molimo unesite adresu");    
        e.preventDefault()
    }
    else if(EditUser.datum.value == "") {
        EditUser.datum.style.border = "1px solid red";
        alert("Molimo unesite datum rodjenja");    
        e.preventDefault()
    }
    else if(EditUser.brTelefona.value == "") {
        EditUser.brTelefona.style.border = "1px solid red";
        alert("Molimo unesite broj telefona");    
        e.preventDefault()
    }
    else if(EditUser.email.value == "") {
        alert("Molimo unesite email");
        EditUser.email.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditUser.korisnickoIme.value == "") {
        alert("Molimo unesite korisnicko ime");
        EditUser.korisnickoIme.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditUser.sifra.value == "") {
        alert("Molimo unesite lozinku");
        EditUser.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditUser.sifra.value == "") {
        alert("Molimo unesite lozinku");
        EditUser.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditUser.sifra.value.length < 4 ) {
        alert("Lozinka mora biti veca od 4");
        EditUser.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditUser.sifra.value == "" || EditUser.korisnickoIme.value == "" || EditUser.email.value == "" || EditUser.prezime.value == "" || EditUser.ime.value == ""){
        alert("Molimo popunite polja");
        EditUser.sifra.style.border = "1px solid red";
        EditUser.sifra.focus();
        e.preventDefault() 
    }
 });