
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

session81();
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


session82();
function session82(){
    //Local Storage comme properties en Android !
    localStorage.setItem("key", "value");
}