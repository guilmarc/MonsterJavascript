

function session51(){
    document.getElementById("myID").style.background = "red";
    document.querySelector("#myID").style.background = "red";

    document.querySelector(".first").style.backgroundColor = "green";

    document.querySelector("li:first-child").style.backgroundColor = "yellow";
    document.querySelector("li:last-child").style.backgroundColor = "green";

    //Avec le All, on peut retourner tous les éléments
    var nodes = document.querySelectorAll("li:nth-child(2n + 3)");
    nodes.forEach( function(x){
        x.style.background = "purple";
    });

    nodes.forEach( (x) => x.style.background = "purple");
}

function session52(){
   document.getElementsByClassName("pickme")[0].remove();

   document.getElementsByTagName("h1")[0].innerText = "Nouveau titre là là !!!";
   document.getElementsByTagName("h1")[0].setAttribute("class", "red");

   document.querySelectorAll("li").forEach( (x, i) => {
       x.innerText = `List Item #${i}`;
   });
}

function session54(){

    //getElementsByTagName n'implémente pas le forEach
    let input =  document.getElementsByTagName("li")
    for(let i = 0; i < input.length; i ++ ) {
        //console.log(e);
        input[i].style.background = "gray";
    }

    //Retourne une liste de Node.  Un Element EST UN Node
    document.querySelectorAll("li").forEach( (n, i) => {
        n.innerText = n.className ? n.className : "No Class";
        n.classList.toggle("test1"); // className("two").toggle();
        n.classList.remove("test2");
        n.classList.replace("test", "test3");
        console.log(n.classList.contains("first"));
        n.classList.add("test4");
    } );
}

session55();
function session55(){

}