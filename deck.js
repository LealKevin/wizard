import { shuffleArray } from "./tools.js";
export const deck = [];
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


console.log(deck);
console.log(deck.length); 
console.log(shuffleArray(deck));