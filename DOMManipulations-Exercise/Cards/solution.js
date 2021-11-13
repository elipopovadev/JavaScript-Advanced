function solve() {
    let playerOneCards = document.getElementById('player1Div');
    let playerTwoCards = document.getElementById('player2Div');
    let result = document.getElementById('result').children;
    let history = document.getElementById('history');

    let cardOne;
    let cardTwo;

    if (result[0].innerHTML === "") {
        playerOneCards.addEventListener("click", e => {
            if (e.target.name === undefined) {
                return;
            }
            result[0].innerHTML = e.target.name;
            cardOne = e.target;
            closeCard(e);
            if (result[0].innerHTML !== "" && result[2].innerHTML !== "") {
                addBorderToCards(cardOne, cardTwo);
                keepHistory(cardOne, cardTwo);
                defaultValues(result);
            }
        });
    }

    if (result[2].innerHTML === "") {
        playerTwoCards.addEventListener("click", e => {
            if (e.target.name === undefined) {
                return;
            }
            result[2].innerHTML = e.target.name;
            cardTwo = e.target;
            closeCard(e);
            if (result[0].innerHTML !== "" && result[2].innerHTML !== "") {
                addBorderToCards(cardOne, cardTwo);
                keepHistory(cardOne, cardTwo);
                defaultValues(result);
            }
        });
    }


    function closeCard(e) {
        if (e.target.src = 'images/card.jpg') {
            e.target.src = 'images/whiteCard.jpg';
        }
    }

    function addBorderToCards(cardOne, cardTwo) {
        if (Number(cardOne.name) > Number(cardTwo.name)) {
            cardOne.style.border = '2px solid green';
            cardTwo.style.border = '2px solid red';
        } else if (Number(cardOne.name) < Number(cardTwo.name)) {
            cardOne.style.border = '2px solid red';
            cardTwo.style.border = '2px solid green';
        }
    }

    function keepHistory(cardOne, cardTwo) {
        history.innerHTML += `[${cardOne.name} vs ${cardTwo.name}]`;
    }

    function defaultValues(result) {
        result[0].innerHTML = "";
        result[2].innerHTML = "";
    }
}