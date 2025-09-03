const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const unhealthy = process.env.UNHEALTHY === '1';

app.get('/health', (req, res) => {
  if (unhealthy) return res.status(500).send('unhealthy');
  res.send('ok');
});

app.get('/', (req, res) => res.send('Self-healing demo service'));

app.listen(port, () => console.log(`Listening on ${port}`));
