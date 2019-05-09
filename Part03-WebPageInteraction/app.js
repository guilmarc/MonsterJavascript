

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

function session55(){

    //Children retourne un HTMLCollection
    const e = document.querySelector("div.first");
    for (let i = 0; i < e.children.length; i++) {
        console.log( e.children[i].textContent );
        console.log( e.children[i] );
    }
    //ChildNodes retourne un NodeList
    for (let i = 0; i < e.childNodes.length; i++) {
        console.log( e.childNodes[i].textContent );
        console.log( e.childNodes[i] );
    }
    //Les Nodes incluent les attributes et section de texte


    console.log( e.parentElement );     //Retourne l'élément HTML parent
    console.log( e.parentNode );        //Retourne le NODE parent (peut être du TextNode

    console.log( e.nextElementSibling ); //Element
    console.log( e.nextSibling );        //Node

    console.log( e.previousElementSibling ); //Element
    console.log( e.previousSibling );        //Node

}


function session57(){
    const div = document.createElement("div");
    div.style.background = "blue";
    div.id = "newDiv";
    const text = document.createTextNode("Hello World");
    div.appendChild(text);
    //Nécessite deux Element (pas de ID)
    document.body.insertBefore( div,document.getElementById("myID") );

}

function session58(){
    //On alerte si on clique sur le div "myID"
    const div = document.getElementById("myID");
    div.addEventListener("click", ()=>{ alert("Clicked") });

    //On toggle en goule le point du li
    let nodes = document.querySelectorAll("li");
    nodes.forEach((n, i)=>{
        n.style.padding = "10px";
        n.style.margin = "5px";
        n.style.background = i % 2 ? "#fff517" : "#fff980";
        n.addEventListener("click", ()=>{
            n.classList.toggle("red");
        });
    });

}

session60()
function session60(){
    let button = document.getElementById("addButton");
    let input = document.getElementById("itemInput");
    let list = document.querySelector("ul");



}