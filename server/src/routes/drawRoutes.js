import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'List draws' });
});
router.post('/run', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Run monthly draw' });
});
router.get('/:id', authMiddleware, (req, res) => {
  res.json({ message: `Draw details for ${req.params.id}` });
});

export default router;
