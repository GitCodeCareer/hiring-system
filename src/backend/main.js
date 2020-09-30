const express = require('express');
const app = express();
const path = require('path');
const port = process.env.APP_PORT || 3000;

app.use('/static', express.static(path.join(`${__dirname}/public`)))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
})

app.get('/api', (req, res) => {
  res.status(200).json({
    message: "hello, im api endpoint"
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})