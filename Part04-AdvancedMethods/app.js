
function session73() {
    for (let i = 0; i < 100; i++) {
        console.log( random(10, 20) );
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
function random(min, max) {
    return Math.floor( Math.random() * (max - min+1) ) + min;
}


function session79() {
    let player = {
        speed : 25,
        x : 100,
        y : 100
    };

    window.addEventListener( "DOMContentLoaded", ()=> {


            player.element = document.createElement("div");
            player.element.style.position = "absolute";
            player.element.style.width = "100px";
            player.element.style.height = "100px";
            player.element.style.background = "red";
            player.element.style.top = player.y + "px";
            player.element.style.left = player.x + "px";
            document.body.appendChild( player.element );

    });

    document.addEventListener("keydown",(e) => {
        console.log(e.key);
        switch( e.key ) {
            case "ArrowUp": player.y -= player.speed; break;
            case "ArrowLeft": player.x -= player.speed; break;
            case "ArrowDown": player.y += player.speed; break;
            case "ArrowRight": player.x += player.speed; break;
        }

        player.element.style.top = player.y + "px";
        player.element.style.left = player.x + "px";

    });

}

function session80(){
    let start = new Date("1-1-1970").getTime();
    let end = new Date("02-05-1978").getTime();
    console.log( end - start);
}


function session81(){
    // Create a request variable and assign a new XMLHttpRequest object to it.
    let request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

    request.onload = function () {
        // Begin accessing JSON data here
        //console.log( request.response);

        let object = JSON.parse( request.response );

        console.log(object);
    }

    // Send request
    request.send()
}



function session82(){
    //Local Storage comme properties en Android !
    localStorage.setItem("key", "value");
}

function session84(){
    const intervalID = window.setInterval(myCallback, 500, "interval method");
    const timoutID = window.setTimeout(myCallback, 200, "Set Timeout");

    function myCallback(message){
        console.log(message);
    }

    function stopInterval(){
        clearInterval(intervalID);
    }

    let x = 0;
    const e = document.querySelector("div");
    e.style.width = "100px";
    e.style.height = "100px";
    e.style.backgroundColor = 'red';

    function step(){
        x++;
        e.style.transform = "translateX(" + x + "px)";
        if(x<450){
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);

    document.querySelector("button").innerText = "Stop Interval";
    document.querySelector("button").addEventListener( "click", () => {
       stopInterval();
    });

}


function session84b(){

    var div = document.querySelector("div");
    var count = 10;

    var intervalID = window.setInterval(decrement, 1000);

    function decrement(){

        count--;

        div.innerText = count;

        if( count === 0 ) {
            window.clearInterval( intervalID );
        }
    }
}

session87(); //Prototype
function session87(){
    function Person(first, last){
        this.firstName = first;
        this.lastName = last;
    }

    Person.prototype.fullName = function(){
        return this.firstName + " " + this.lastName;
    };

    const me = new Person("Marco", "Polo");
    console.log( me );
    console.log( me.fullName());

    //Autre exemple
    Date.prototype.addDays = function(days){
        return new Date(this.valueOf() + days*864e5); //864e5 Numbre de millisecondes dans une journée
    }
    console.log( new Date().addDays(10) );
}

 //Try N Catch
function session88() {
    //https://www.udemy.com/javascript-course-projects/learn/v4/t/lecture/14261866?start=0
}

session89();
function session89(){
    let request = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";

    console.log( request );
}


