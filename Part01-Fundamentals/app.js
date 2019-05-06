
function part13() {
    let name = prompt("What is your name ?");
    let message = `Welcome ${name}`;
    alert(message);
}

function part14(){
    let a = "5";
    let b = "10"

    console.log(Number(a) + Number(b));
}


function part17(){
    let input = prompt("Entrer a value in miles");

    if( isNaN(input) === false ) {
        let number = Number(input);
        alert(`The value is ${  number * 1.60945 } km`)
    } else {
        alert("Wrong input")
    }
}


function part20() {
    let number = 22;
    console.log( number % 2 === 0 ? 'Even' : 'Odd');
}


function part24(){

    let value = 2;

    switch(value){
        case 1:
        case 3-2:


    }

}
