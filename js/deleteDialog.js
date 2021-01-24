var kanta = document.getElementById('kanta');
kanta.addEventListener('click', function(e){
    // alert('Da li ste sigurni da zelite da obrisete korisnika?');
    if(confirm('Da li zelite da obrisete korisnika?')){
        console.log("Korisnik je obrisan")
    }
    else{
        console.log("Brisanje otkazano")
        return false;
    }
});