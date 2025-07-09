const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const data = JSON.stringify(req.body, null, 2);
  fs.appendFileSync('webhook-log.txt', data + '\n\n');
  console.log('Webhook received:', data);
  res.status(200).send('Webhook received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
