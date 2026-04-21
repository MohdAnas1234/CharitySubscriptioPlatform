import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/me', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

router.get('/', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'List users endpoint not implemented yet' });
});

export default router;
