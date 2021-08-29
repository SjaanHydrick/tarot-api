import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cards from './tarot-cards.js'
// import cardsRoutes from './routes/cards.js';

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    res.send(randomCard);
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
