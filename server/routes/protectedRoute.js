import express from 'express';
import verifyToken from '../src/middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

export default router;