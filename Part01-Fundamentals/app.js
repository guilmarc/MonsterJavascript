
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

function part31(){
    recursive(0);
}

function recursive( value ){
    if (value < 25)
    console.log(recursive(value + 1));
    return value;
}

function part32() {

    (function (name) {
        console.log("My name is " + name);
    })("Marco");
}

function part33(){
    const arrowFunction = (x) => x * 5;

    console.log( arrowFunction(5));

}


function part34() {
    var person = {};
    person.firstName = "Marco";
    person.lastName = "Guilmette";

    console.table(person);

    var car = {
        year : 2013,
        color: "Blue",
        wheels: ["OK", "OK", "FLAT", "OK"],
        model: "Corvette",
        manufacturer: "Chevrolet",
        old: function(){return new Date().getFullYear() - this.year },
        old2(){return new Date().getFullYear() - this.year}
    }

    console.table( car );
    console.log( car.old());
    console.log( car.old2());
}


function part38(){
    const theList = ["Laurence", "Svekis", true, 35 ,null, undefined, {test: "one", score: 55}, ["one", "two"]];
    console.log(theList[6].score);
    console.log(theList[7][1]);
}


function part39(){
    const theList = ["Laurence", "Svekis", true, 35 ,null, undefined, {test: "one", score: 55}, ["one", "two"]];
    theList.shift();
    theList.shift();
    theList.shift();
    theList.unshift( "make me first" );
    console.log(theList);
}


function part41(){
    const array = [0, 2, 4, 6, 7, 9];
    array2 = array.filter( (x) =>{ return !(x % 2) });
    console.table(array2);
}

part45();
function part45() {
    const array = [4,435,7653,6543,6543,76542];
    let mapArray = array.map( function (x, index) {
       return x - 1000;
    });
    console.log( mapArray );
}

