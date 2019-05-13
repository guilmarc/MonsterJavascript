const objects = ["Rock", "Paper", "Scissor"];

function createMatrix() {
    let array = new Array(3);
    array.forEach( (a)=> {
        a = [1,1,1];
    } );
}

var matrix = [
  [0 , -1, 1],
  [1, 0, -1],
  [0]
];

document.querySelectorAll( "button" ).forEach( (e, i)=> {

    e.index = i;
    e.addEventListener("click", () => {

        let computerIndex = Math.floor(Math.random() * objects.length);



    });

});