import express from 'express';
import {deck} from './deck.js';
const app = express();


app.get('/', (req, res) => {
    res.render('index', {deck});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');});