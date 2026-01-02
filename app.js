const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
console.log("PORT from ENV:", process.env.PORT);

app.get('/', (req, res) => {
  res.send('DevSecOps Demo Running');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


