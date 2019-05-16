
const BRICK_WIDTH = 100;
const TOP_SPACE = 30;

let board = document.getElementById("board");
let rect = board.getBoundingClientRect();

function buildBricks(row) {
    let count = Math.floor( rect.width / BRICK_WIDTH )
    let x = (rect.width % BRICK_WIDTH) / 2

    for(let j =0; j < row; j++){
        for (let i = 0; i < count; i++) {
            let brick = document.createElement("div");
            brick.classList.add( "brick" );
            brick.style.left = (i * BRICK_WIDTH) + x + "px" ;
            brick.style.top = (j * 50) + TOP_SPACE + "px";
            board.appendChild(brick);
        }
    }


}

buildBricks(5);