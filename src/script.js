(function(){

'use strict';



let state = "titleScreen";

let playerOne = {
    score: 0,
    isTheirTurn: false
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


window.onload = () => {
    let titleScreen = document.getElementById('title-screen');
    titleScreen.style.display = "block";
    state = "titleScreen";
}

window.onclick = event => {
    let titleScreen = document.getElementById('title-screen');
    if (event.target == titleScreen) {
        titleScreen.style.display = "none";
        setupGame();
    }
}



function setupGame() {

    state = "mainGame";

    setPlayerTurn(playerOne);

    let deck = shuffle(cards)


    for (let card of deck) {
        
        let face = document.createElement("div");
        let cover = document.createElement("div");

        face.classList.add("card", "face-card");
        face.style.backgroundColor = card.color;

        cover.classList.add("card", "cover-card");

        let cardsContainer = document.getElementById("cards-container");
        cardsContainer.insertBefore(face, null); 
        setTimeout(() => face.insertBefore(cover, null), 1000)
        

        cover.addEventListener("click", function showCard() {

            cover.classList.add("revealed");
            cardsRevealed++;

            if (cardsRevealed >= 2) {

                setTimeout(() => {
                    cover.classList.remove("revealed");
                    let revealedCards = document.getElementsByClassName("revealed");
                    for (let card of revealedCards) {
                        card.classList.remove("revealed");
                    }
                    cardsRevealed = 0;
                }, 1000);

                for (let card of document.getElementsByClassName('cover-card')) {
                    card.removeEventListener("click", showCard);
                    setTimeout(() => card.addEventListener("click", showCard), 1000);
                }
            }
        });
    }

}

function setPlayerTurn(player) {

    if (player === playerOne) {
        playerTwo.isTheirTurn = false;
        document.getElementById("playerTurnDisplay").innerHTML = "Player 1's turn!"
    } else {
        playerOne.isTheirTurn = false;
        document.getElementById("playerTurnDisplay").innerHTML = "Player 2's turn!"
    }
    
    player.isTheirTurn = true;
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

})();