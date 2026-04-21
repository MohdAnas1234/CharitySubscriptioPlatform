import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List all charities' });
});
router.get('/:id', (req, res) => {
  res.json({ message: `Charity details for ${req.params.id}` });
});
router.post('/', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Create charity' });
});
router.put('/:id', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: `Update charity ${req.params.id}` });
});
router.delete('/:id', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: `Delete charity ${req.params.id}` });
});

export default router;
