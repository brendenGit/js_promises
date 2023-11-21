const getOneCard = () => {
    axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => {
        const value = response.data.cards[0].value;
        const suit = response.data.cards[0].suit;
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    })
    .catch(error => console.log(error));
}

const getTwoCards = () => {
    let cardOne, cardTwo;
    axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => {
        cardOne = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`;
        const deckId = response.data.deck_id;
        return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    })
    .then(response => {
        cardTwo = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`;
        console.log(cardOne, cardTwo)
    })
    .catch(error => console.log(error));
}

const pullCardBtn = document.getElementById('pullCardBtn');
const cardPile = document.getElementById('cardPile')
let deckId;
axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => {
            deckId = response.data.deck_id; 
        })
        .catch(error => console.log(error));

const getCard = () => { 
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => {
        const cardImgEle = document.createElement('img')
        cardImgEle.src = response.data.cards[0].images.svg;
        cardImgEle.style.setProperty('--rotation',`${-40 + Math.random() * 80}deg`);
        cardImgEle.classList.add('card');
        cardPile.appendChild(cardImgEle);
    })
    .catch(error => console.log(error));
}

pullCardBtn.addEventListener('click', getCard);