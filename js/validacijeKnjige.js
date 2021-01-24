var EditBook = document.getElementById("EditBook");
var btn = document.getElementById("btn_submit"); 

EditBook.addEventListener('submit', (e) => {
    if(EditBook.ime.value == "" && EditBook.isbn.value == "" && EditBook.adresa.value == "" && EditBook.autor.value == "" 
    && EditBook.jezik.value == "" && EditBook.datum.value == ""&& EditBook.cena.value == "" && EditBook.brStrana.value == "" 
    && EditBook.opis.value == "" && EditBook.slika.value == ""){
        alert("Molimo unesite podatke");
        EditBook.ime.style.border = "1px solid red";
        EditBook.isbn.style.border = "1px solid red";
        EditBook.adresa.style.border = "1px solid red";
        EditBook.autor.style.border = "1px solid red";
        EditBook.jezik.style.border = "1px solid red";
        EditBook.povez.style.border = "1px solid red";
        EditBook.pismo.style.border = "1px solid red";
        EditBook.datum.style.border = "1px solid red";
        EditBook.ocena.style.border = "1px solid red";
        EditBook.cena.style.border = "1px solid red";
        EditBook.brStrana.style.border = "1px solid red";
        EditBook.opis.style.border = "1px solid red";
        EditBook.slika.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditBook.ime.value == "") {
        alert("Molimo unesite naziv");
        EditBook.ime.style.border = "1px solid red";
        e.preventDefault()   
    }
    else if(EditBook.isbn.value == "") {
        alert("Molimo unesite isbn");  
        EditBook.isbn.style.border = "1px solid red";  
        e.preventDefault()
    }
    else if(EditBook.adresa.value == "") {
        EditBook.adresa.style.border = "1px solid red";
        alert("Molimo unesite adresu");    
        e.preventDefault()
    }
    else if(EditBook.autor.value == "") {
        EditBook.autor.style.border = "1px solid red";
        alert("Molimo unesite autora knjige");    
        e.preventDefault()
    }
    else if(EditBook.jezik.value == "") {
        EditBook.jezik.style.border = "1px solid red";
        alert("Molimo unesite jezik knjige");    
        e.preventDefault()
    }
    else if(EditBook.datum.value == "") {
        alert("Molimo unesite datum izdavanja");
        EditBook.datum.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditBook.cena.value == "") {
        alert("Molimo unesite korisnicko ime");
        EditBook.cena.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditBook.brStrana.value == "") {
        alert("Molimo unesite broj strana knjige");
        EditBook.brStrana.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditBook.opis.value == "") {
        alert("Molimo unesite opis knjige");
        EditBook.opis.style.border = "1px solid red";
        e.preventDefault()
    }
    else if(EditBook.isbn.value.length !== 13 ) {
        alert("ISBN knjige mora imati tacno 13 cifara");
        EditUser.sifra.style.border = "1px solid red";
        e.preventDefault()
    }
 });