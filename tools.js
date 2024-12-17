// Description: This file contains the tools that are used in the game.

let players = [];
function createPlayers(num){
    players = [];
    for(let i = 1; i <= num; i++){
        players.push({name : `Payer ${i}`, cards : []});
    }
    return players;
};


// Fisher-Yates shuffle algorithm
function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}

// Distribute cards to players
function cardDistribution(deck, players, rounds) {
    const deckShuffle = shuffleArray(deck);
    let cardIndex = 0;
    for (let i = 0; i < rounds; i++) {
        players.forEach(player => {
            player.cards.push(deckShuffle[cardIndex]);
            cardIndex++;
        });
    }
    return players;
}

// Game Logic
// function gameLogic(player){
//     const tableHolder =[];
//     players.forEach((player) => {tableHolder.push(player.cards)})
// }

// If card.color === previews card.color{
//     card.sort((a, b) => a - b [0])
// }

export { shuffleArray, cardDistribution, createPlayers, players };
    