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

var isEditing = false;
var index = 0;

function init(){

    nameInput.classList.remove("is-invalid");
    nameInput.value = "";
    birthYearSelect.selectedIndex = 20;

};
init();

function updateRow(index){
    if(isEditing) {
        document.getElementById("nameElement" + index).style.display = "none";
        document.getElementById("nameElementUpdate" + index).style.display = "initial";
        document.getElementById("updateButton" + index).innerText = "Confirmer";
        document.getElementById("deleteButton" + index).innerText = "Annuler";
    } else {
        document.getElementById("nameElement" + index).style.display = "initial";
        document.getElementById("nameElementUpdate" + index).style.display = "none";
        document.getElementById("updateButton" + index).innerText = "Modifier";
        document.getElementById("deleteButton" + index).innerText = "Supprimer";
    }
}

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
        newElement.id = index;

        let nameElementSection = document.createElement("td");

        let nameElement = document.createElement("span");
        nameElement.id = "nameElement" + index;
        nameElement.innerText = newPerson.name;
        nameElementSection.appendChild( nameElement );

        let nameElementUpdate = document.createElement("Input");
        nameElementUpdate.id = "nameElementUpdate" + index;
        nameElementUpdate.value = newPerson.name;
        nameElementSection.appendChild( nameElementUpdate );

        newElement.appendChild( nameElementSection );

        let ageElement = document.createElement("td");
        ageElement.innerText = newPerson.age();
        ageElement.style.color = newPerson.age() >= 50 ? "red" : "green";
        newElement.appendChild( ageElement );

        let buttonSection = document.createElement("td");

        let updateButton = document.createElement("button");
        updateButton.id = "updateButton" + index;
        updateButton.index = index;
        updateButton.innerText = "Modifier";
        updateButton.className = "btn btn-primary";
        updateButton.addEventListener("click", function( ) {

            if(isEditing) {

                document.getElementById("nameElement" + this.index).innerText = document.getElementById("nameElementUpdate" + this.index).value;
                //document.getElementById("ageElement" + this.index).value = document.getElementById("ageElementUpdate" + this.index).value;

                isEditing = false;
            } else {

                document.getElementById("nameElementUpdate" + this.index).value = document.getElementById("nameElement" + this.index).innerText;
                //document.getElementById("ageElementUpdate" + this.index).value = document.getElementById("ageElement" + this.index).value;

                isEditing = true;
            }

            updateRow( this.index );

        });
        buttonSection.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton" + index;
        deleteButton.index = index;
        deleteButton.innerText = "Supprimer";
        deleteButton.className = "btn btn-outline-danger ml-2";
        deleteButton.addEventListener("click", function() {
            if(isEditing) {
                isEditing = false;
                updateRow( this.index );
            } else {
                personTableBody.removeChild(newElement);
            }
        });
        buttonSection.appendChild(deleteButton);

        newElement.appendChild(buttonSection);

        personTableBody.appendChild(newElement);

        updateRow(index);

        index++;

        init();

        console.log(newPerson.age());
    } else {

        nameInput.classList.add("is-invalid");
        console.log( nameInput.classList );
    }
}
