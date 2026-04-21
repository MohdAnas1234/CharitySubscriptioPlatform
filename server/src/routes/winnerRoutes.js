import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'List winners' });
});
router.post('/:id/verify', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: `Verify winner ${req.params.id}` });
});
router.post('/:id/proof', authMiddleware, (req, res) => {
  res.json({ message: `Upload proof for winner ${req.params.id}` });
});

export default router;
