import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import receiptsRouter from '../routes/receipts.js';
import pantryRouter from '../routes/pantry.js';
import protectedRouteRouter from '../routes/protectedRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000;
const app = express();
app.use(cors());

/** GET endpoint for sending back a Hello World message */
app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello, World! This is the home page');
});

// middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routers
// if working in backend, please add router then go to routes folder and add code there
app.use('/receipts', receiptsRouter);
app.use('/pantry', pantryRouter);
app.use('/protected-route', protectedRouteRouter);

// Tells our app to listen to the given port
// for now we will run on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});