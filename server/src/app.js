import express from 'express';
import cors from 'cors';

import receiptsRouter from '../routes/receipts.js';

const port = 3000;
const app = express();
app.use(cors());

/** GET endpoint for sending back a Hello World message */
app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
});

app.use('/receipts', receiptsRouter);

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});