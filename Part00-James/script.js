// Remplir le dropdown des années de naissance
///////////////////////////////////////////////

var currentYear = new Date().getFullYear();

for(var i = currentYear; i >= (currentYear - 100); i--) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;

    // TODO Ajouter les options au select
    
}

///////////////////////////////////////////////

var persons = [];

(function init(){

    var addButton = document.getElementById("addButton");
    var nameInput = document.getElementById("nameInput");
    var birthdaySelect = document.getElementById("birthdaySelect");

})();

function addPerson(){
    let newPerson = {

    }
}