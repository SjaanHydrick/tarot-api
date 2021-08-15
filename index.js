import express from 'express';
import bodyParser from 'body-parser';
import cardsRoutes from './routes/cards.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/cards', cardsRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
