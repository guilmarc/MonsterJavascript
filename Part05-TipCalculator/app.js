

    let h1 = document.querySelector("h1");
    let runButton = document.getElementById("runButton");
    let amountInput = document.getElementById("amountInput");

    runButton.addEventListener("click",() => {

        let amount = new Number(amountInput.value);
        let tip =  (amount * 0.15).toFixed(2);
        h1.innerText = `Vous devez donner ${tip} de pourboire`;
    } );



