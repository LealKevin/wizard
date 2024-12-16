import { shuffleArray, cardDistribution, players } from "./tools.js";
const deck = [];
const colors = ['red', 'green', 'blue', 'yellow'];

colors.forEach(color => {
    for (let i = 1; i < 14; i++) {
        deck.push({
            color: color,
            value: i,
            type: 'normal'
        });
    }
});

for (let i = 0; i < 4; i++) {
    deck.push({color: null, value: 14, type: 'wizard'});
    deck.push({color: null, value: 0, type: 'fool'});
}

console.log(shuffleArray(deck));
console.log(cardDistribution(deck, players));
console.log(players[0]);

export { deck };