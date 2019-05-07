// Remplir le dropdown des années de naissance
///////////////////////////////////////////////

var currentYear = new Date().getFullYear();

for(let i = currentYear; i >= (currentYear - 100); i--) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;

    // TODO Ajouter les options au select
    document.getElementById("birthYearSelect").appendChild(option);
}

///////////////////////////////////////////////

var persons = [];

var addButton = document.getElementById("addButton");
var nameInput = document.getElementById("nameInput");
var birthYearSelect = document.getElementById("birthYearSelect");
var personTableBody = document.getElementById("personTableBody");


function init(){

    nameInput.classList.remove("is-invalid");
    nameInput.value = "";
    birthYearSelect.selectedIndex = 20;;

};
init();

function addPerson(){

    let name = nameInput.value;

    if(name !== "") {
        let birthYear = Number( birthYearSelect.options[birthYearSelect.selectedIndex].value );

        let newPerson = {
            "name" : name,
            "birthYear" : birthYear,
            "age" : function(){ return new Date().getFullYear() - birthYear }
        };

        persons.push(newPerson);


        let newElement = document.createElement("tr");

        let nameElement = document.createElement("td");
        nameElement.innerText = newPerson.name;
        newElement.appendChild( nameElement );

        let ageElement = document.createElement("td");
        ageElement.innerText = newPerson.age();
        newElement.appendChild( ageElement );

        let buttonSection = document.createElement("td");

        let updateButton = document.createElement("button");
        updateButton.innerText = "Modifier";
        updateButton.className = "btn btn-primary";
        buttonSection.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Supprimer";
        deleteButton.className = "btn btn-outline-danger ml-2";
        deleteButton.addEventListener("click", function() {
            personTableBody.removeChild(newElement);
        });
        buttonSection.appendChild(deleteButton);

        newElement.appendChild(buttonSection);

        personTableBody.appendChild(newElement);

        init();

        console.log(newPerson.age());
    } else {

        nameInput.classList.add("is-invalid");
        console.log( nameInput.classList );
    }


}




function test() {

    var name = "James";

    if(1===1) {
        let name2 = "Tomas";``
        name = "af"
    }


    name2 = "test";

    for (let d = 0; i < 90 ; i++) {

    }

    console.log(i);


}