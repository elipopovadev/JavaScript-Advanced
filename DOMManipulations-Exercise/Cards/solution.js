function solve() {
    let playerOneCards = document.getElementById('player1Div');
    let playerTwoCards = document.getElementById('player2Div');
    let result = document.getElementById('result').children;
    let history = document.getElementById('history');

    if (result[0].innerHTML === "") {
        playerOneCards.addEventListener("click", e => { 
            if(e.target.name === undefined) {
                return;
            }
            result[0].innerHTML = e.target.name;
            closeCard(e);
        });
    }

    if (result[2].innerHTML === "") {
        playerTwoCards.addEventListener("click", e => {
            if(e.target.name === undefined) {
                return;
            }
            result[2].innerHTML = e.target.name;
            closeCard(e);
        });
    }

    if (result[0].innerHTML !== "" && result[2].innerHTML !== "") {
        addBorderToCards(result);
        keepHistory(result);
        defaultValues(result);
    }



    function closeCard(e) {
        if (e.target.src = 'images/card.jpg') {
            e.target.src = 'images/whiteCard.jpg';
        }
    }

    function addBorderToCards(result) {
        let firstCard = document.getElementsByName(result[0].innerHTML)[0];
        let secondCard = document.getElementsByName(result[2].innerHTML)[0];
        if (Number(firstCard.name) > Number(secondCard.name)) {
            firstCard.style.border = '2px solid green';
            secondCard.style.border = '2px solid red';
        } else if (Number(firstCard.name) < Number(secondCard.name)) {
            firstCard.style.border = '2px solid red';
            secondCard.style.border = '2px solid green';
        }
    }

    function keepHistory(result) {
        let firstCard = document.getElementsByName(result[0].innerHTML)[0];
        let secondCard = document.getElementsByName(result[2].innerHTML)[0];
        history.innerHTML += `[${firstCard.name} vs ${secondCard.name}]`;
    }

    function defaultValues (result) {
        result[0].innerHTML = "";
        result[2].innerHTML = "";
    }
}