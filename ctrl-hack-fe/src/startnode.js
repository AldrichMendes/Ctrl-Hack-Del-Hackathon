const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // You can choose any port

app.use(cors());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
