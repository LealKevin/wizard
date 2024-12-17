import express from 'express';
import {deck} from './deck.js';
import { cardDistribution, createPlayers, players } from './tools.js';

const app = express();
const num = 3; //Num of players
const rounds = 2; //Num of rounds
createPlayers(num);
cardDistribution(deck, players, rounds);
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {deck});
});

app.get('/:playerID', (req, res) =>{
    let playerID = parseInt(req.params.playerID);
    let player = players[playerID - 1]
    res.render('hand', { player });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

console.table(cardDistribution(deck, players, rounds));
// console.log(players);
console.log(players[1].cards)