
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 30;
const TOP_SPACE = 30;
const BALL_WIDTH = 25;
const PADDLE_SPEED = 5;
const PADDLE_WIDTH = 80;
const BALL_SPEED = 4;

let board = document.getElementById("board");
let rect = board.getBoundingClientRect();
let paddle = board.querySelector(".paddle");

function buildBricks(row) {

    var bricks = [];

    let count = Math.floor( rect.width / BRICK_WIDTH );
    let x = (rect.width % BRICK_WIDTH) / 2;


    for(let j =0; j < row; j++){
        for (let i = 0; i < count; i++) {
            let brick = document.createElement("div");
            brick.classList.add( "brick" );
            brick.style.left = (i * BRICK_WIDTH) + x + "px" ;
            brick.style.top = (j * BRICK_HEIGHT) + TOP_SPACE + "px";
            board.appendChild(brick);
            bricks.push(brick);
        }
    }
}



function isTouching(e1, e2){

}

function setup() {
    buildBricks(5);

    document.addEventListener( "keydown", (event)=>{
        if( event.key === "ArrowLeft" ) {
            paddle.moveleft = true;
        }

        if (event.key === "ArrowRight") {
            paddle.moveright = true;
        }
    } );

    document.addEventListener( "keyup", (event)=>{
        if( event.key === "ArrowLeft" ) {
            paddle.moveleft = false;
        }

        if (event.key === "ArrowRight") {
            paddle.moveright = false;
        }
    } );




    window.requestAnimationFrame( update );
}

function update() {

    //let paddleCurrentOffset = paddle.offsetLeft;

    if (paddle.offsetLeft >= 0 && paddle.moveleft) {
        paddle.style.left = paddle.offsetLeft - PADDLE_SPEED + "px";
    }

    if (paddle.offsetLeft <=  rect.width - PADDLE_WIDTH && paddle.moveright) {
        paddle.style.left = paddle.offsetLeft + PADDLE_SPEED + "px";
    }
    window.requestAnimationFrame( update );
}

setup();