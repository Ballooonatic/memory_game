function main() {

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
        {color: "pink"},
        {color: "pink"},
        {color: "red"},
        {color: "red"},

        {color: "orange"},
        {color: "orange"},
        {color: "yellow"},
        {color: "yellow"},

        {color: "green"},
        {color: "green"},
        {color: "turquoise"},
        {color: "turquoise"},

        {color: "blue"},
        {color: "blue"},
        {color: "violet"},
        {color: "violet"}
    ]

    window.onload = () => {
        let modal = document.getElementById('modal');
        modal.style.display = "block";
        state = "titleScreen";
    }

    window.onclick = event => {
        let modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = "none";
            state = "mainGame";
        }
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

main();