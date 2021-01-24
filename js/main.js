var menuItems = document.getElementById("MenuItems");
menuItems.style.maxHeight = "0px";
function closeMenu() {
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px"
    }
    else{
        menuItems.style.maxHeight = "0px"
    }

}


var slike = document.getElementsByClassName("col-4");
for (var i = 0; i < slike.length; i++) {
    slike.item(i).addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = 'book_details.html';

 });
}


var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm"); 
var Reg = document.getElementById("createAcc");
var accIcon = document.getElementById("acc");
var popWin = document.getElementById("popup");
var popUp = document.getElementById("popup-content");



function login(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";

}

function register(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
}


accIcon.addEventListener("click", function(e){
    popWin.style.display = "grid";
});

Reg.addEventListener("click", register);


// document.addEventListener('mouseup', function(e) {
//   if (e.target !== popUp) {
//     popWin.style.display = 'none';
//     console.log(popWin);
//   }
// });



// document.addEventListener('mouseup', function(e) {
//   if (!popUp.contains(e.target)) {
//     popWin.style.display = 'none';
//   }
// });


// window.addEventListener('click', function(e){   
//     if (document.popUp.contains(e.target)){
      
//     } else{
//       // Clicked outside the box
//     }
//   });

// popWin.onclick = function(e) {
//     if(e.target != popWin) {
//         console.log('You clicked outside');
//     } else {
//         console.log('You clicked inside');
//     }
//   }