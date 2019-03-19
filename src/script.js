(function(){

"use strict";




let playerOne = {
    score: 0,
    isTheirTurn: true
}

let playerTwo = {
    score: 0,
    isTheirTurn: false
}

let cards = [
    {color: "#712e46"},
    {color: "#712e46"},
    {color: "#842a2a"},
    {color: "#842a2a"},

    {color: "#923f29"},
    {color: "#923f29"},
    {color: "#83752e"},
    {color: "#83752e"},

    {color: "#567430"},
    {color: "#567430"},
    {color: "#246f68"},
    {color: "#246f68"},

    {color: "#454f96"},
    {color: "#454f96"},
    {color: "#5a4077"},
    {color: "#5a4077"}
]

let cardsRevealed = 0;

let turnsLeft = 0;

let pauseInput = false;



window.onload = () => {
    let titleScreen = document.getElementById("title-screen");
    titleScreen.style.display = "block";
}

window.onclick = event => {
    let titleScreen = document.getElementById("title-screen");
    if (event.target == titleScreen) {
        titleScreen.style.display = "none";
        setupGame();
    }
}





function setupGame() {

    turnsLeft = 10;

    let deck = shuffle(cards)


    for (let card of deck) {
        
        let newCard = document.createElement("div");

        newCard.classList.add("card");
        newCard.style.backgroundColor = "black";

        let cardsContainer = document.getElementById("cards-container");
        cardsContainer.insertBefore(newCard, null); 
        

        newCard.addEventListener("click", pauseable(() => {

            cardsRevealed++;
            newCard.style.backgroundColor = card.color;
            newCard.classList.add("revealed")

            if (cardsRevealed >= 2) {

                pauseInput = true;

                let shownCards = document.getElementsByClassName("revealed");
                if (shownCards[0].style.backgroundColor === shownCards[1].style.backgroundColor) {
                    if (playerOne.isTheirTurn) updatePlayerScore(playerOne);
                    else if (playerTwo.isTheirTurn) updatePlayerScore(playerTwo);
                }

                setTimeout(() => {
                    pauseInput = false;
                    newCard.style.backgroundColor = "black";
                    newCard.classList.remove("revealed")
                    
                    for (let revealedCard of shownCards) {
                        revealedCard.style.backgroundColor = "black";
                        revealedCard.classList.remove("revealed");
                    }
                    cardsRevealed = 0;
                    togglePlayerTurn();
                }, 1000);
            }
        }));
    }

}





function endGame() {

    if (playerOne.score > playerTwo.score) {
        document.getElementById("winner").innerHTML = "Player 1 wins!"

    } else if (playerTwo.score > playerOne.score) {
        document.getElementById("winner").innerHTML = "Player 2 wins!"
    }

    let endScreen = document.getElementById("end-screen");
    endScreen.style.display = "block";
}





function togglePlayerTurn() {

    if (playerOne.isTheirTurn) {

        playerOne.isTheirTurn = false;
        playerTwo.isTheirTurn = true;
        document.getElementById("player-turn-display").innerHTML = "Player 2's turn!"

    } else if (playerTwo.isTheirTurn) {

        playerTwo.isTheirTurn = false;
        playerOne.isTheirTurn = true;
        document.getElementById("player-turn-display").innerHTML = "Player 1's turn!"
    }

    turnsLeft--;

    if (turnsLeft < 1) endGame();
}





function updatePlayerScore(player) {

    player.score++;
    
    if (player === playerOne) {
        document.getElementById("player-one-score").innerHTML = "P1: " + playerOne.score;
    } else {
        document.getElementById("player-two-score").innerHTML = "P2: " + playerTwo.score;
    }
}





function shuffle(a) {
    
    for (let i = a.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    
    return a;
}





function pauseable (handler) {
    return function (event) {
        if (pauseInput) {
            return;
        }
        return handler(event);
    };
};

})();