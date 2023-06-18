const express = require('express');
const app = express();
const playerQueue = [];

app.post('/register', (req, res) => {
  const player = {
    id: req.body.id,
    skillLevel: req.body.skillLevel,
  };
  playerQueue.push(player);

  res.status(200).send('Player registered successfully');
});

app.get('/matchmake', (req, res) => {
  if (playerQueue.length < 2) {
    res.status(400).send('Not enough players in the queue');
    return;
  }

  const player1 = playerQueue.shift();
  const player2 = playerQueue.shift();
  
  const match = {
    id: 'match-id',
    players: [player1, player2],
  };
  res.status(200).json(match);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
