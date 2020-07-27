const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({
  response: 'You just hit the app route.',
  time: Date.now(),
}));

app.listen(process.env.PORT || 8000, () => console.log(`Running the app at http://localhost:${process.env.PORT || 8000}/`));
