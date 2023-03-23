//définir les variables
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var lenght = document.getElementById("lenght");

//lorsque l'utilisteur clique sur le champ de mot de passe, afficher la boîte message
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

//lorsque l'utilisteur clique en dehors du champ de mot de passe, cacher la boîte message   
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

//lorsque l'utilisteur commence à taper quelque chose dans le champ de mot de passe

myInput.onkeyup = function() {
    //valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) { 
        //si le mot de passe contient au moins une lettre minuscule, la classe "valid" est ajoutée 
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        //si le mot de passe ne contient pas de lettre minuscule, la classe "invalid" est ajoutée
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
    //valider la lettre majuscule
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //valider le chiffre
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    
    //valider la longueur
    if(myInput.value.length >= 8) {
        lenght.classList.remove("invalid");
        lenght.classList.add("valid");
    } else {
        lenght.classList.remove("valid");
        lenght.classList.add("invalid");
    }
}