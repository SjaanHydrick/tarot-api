import express from 'express';

const router = express.Router();

const cards = [
    {
        number: "0",
        name: "The Fool",
        meaning: "nothing can harm you whatever you do!"
    },
    {
        number: "1",
        name: "The Magician",
        meaning: "manifestation"
    }
]

router.get('/', (req, res) => {
    console.log(cards);
    res.send(cards);
});

router.get('/:id', (req, res) => {
    console.log('Card ID');
})

export default router;