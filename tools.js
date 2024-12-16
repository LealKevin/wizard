import { deck } from "./deck.js";
// Description: This file contains the tools that are used in the game.
const player1 = [];
const player2 = [];
const player3 = [];
const player4 = [];
const players = [player1, player2, player3, player4];
const rounds = 3;

// Fisher-Yates shuffle algorithm
function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}

// Distribute cards to players
function cardDistribution(deck, players, round) {
    const deckShuffle = shuffleArray(deck);
    let cardIndex = 0;
    for (let i = 0; i < rounds; i++) {
        players.forEach(player => {
            player.push(deckShuffle[cardIndex]);
            cardIndex++;
        });
    }
    return players;
}


export { shuffleArray, cardDistribution, players };
    