import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/subscribe', authMiddleware, (req, res) => {
  res.json({ message: 'Create subscription' });
});
router.get('/me', authMiddleware, (req, res) => {
  res.json({ message: 'Get current subscription' });
});
router.get('/all', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'List all subscriptions' });
});
router.put('/:id', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: `Update subscription ${req.params.id}` });
});

export default router;
