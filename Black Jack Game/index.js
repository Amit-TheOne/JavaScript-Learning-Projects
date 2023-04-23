let cards = [];
let player = {
    name: "Chips",
    chips: 500
}

const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const messageEl = document.querySelector("#message-el")
const playerEl = document.getElementById("player-el")

let isAlive = false;
let hasBlackJack = false;
let sum = 0;
let message = "";

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum + "";
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "Bingo, it's Black Jack!!";
        hasBlackJack = true;
    }
    else {
        message = "You are out of the game!!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function drawCard() {
    if (isAlive === true && hasBlackJack ===false) {
        let drawCard = getRandomCard();
        sum += drawCard;
        cards.push(drawCard);
        renderGame();
    }
}