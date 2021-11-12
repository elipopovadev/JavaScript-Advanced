function solve() {
    let playerOneCards = document.getElementById('player1Div');
    let playerTwoCards = document.getElementById('player2Div');
    let result = document.getElementById('result');
    let history = document.getElementById('history');

    playerOneCards.addEventListener("click", e => {
        result.firstElementChild.innerHTML = e.target.name;
        closeCard(e);
        playerTwoCards.addEventListener("click", e => {
            result.lastElementChild.innerHTML = e.target.name;
            closeCard(e);
        });
        addBorderToCards(result);
        keepHistory(result);
    });

    playerTwoCards.addEventListener("click", e => {
        result.lastElementChild.innerHTML = e.target.name;
        closeCard(e);
        playerOneCards.addEventListener("click", e => {
            result.firstElementChild.innerHTML = e.target.name;
            closeCard(e);
        });
        addBorderToCards(result);
        keepHistory(result);
    });



    function closeCard(e) {
        if (e.target.src = 'images/card.jpg') {
            e.target.src = 'images/whiteCard.jpg';
        }
    }

    function addBorderToCards(result) {
        let firstCard = document.getElementsByName(result.firstElementChild.innerHTML)[0];
        let secondCard = document.getElementsByName(result.lastElementChild.innerHTML)[0];
        if (Number(firstCard.innerHTML) > Number(secondCard.innerHTML)) {
            firstCard.style.border = '2px solid green';
            secondCard.style.border = '2px solid red';
        } else if (Number(firstCard.innerHTML) < Number(secondCard.innerHTML)) {
            firstCard.style.border = '2px solid red';
            secondCard.style.border = '2px solid green';
        }
    }

    function keepHistory(result) {
        let firstCard = document.getElementsByName(result.firstElementChild.innerHTML)[0];
        let secondCard = document.getElementsByName(result.lastElementChild.innerHTML)[0];
        history.innerHTML += `[${firstCard.innerHTML} vs ${secondCard.innerHTML}]`;
    }
}