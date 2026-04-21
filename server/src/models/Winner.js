import mongoose from 'mongoose';

const winnerSchema = new mongoose.Schema({
  draw: { type: mongoose.Schema.Types.ObjectId, ref: 'Draw', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  matches: { type: Number, required: true },
  tier: { type: String, enum: ['jackpot', 'second', 'third'] },
  amount: { type: Number, required: true },
  proofUrl: String,
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Winner = mongoose.model('Winner', winnerSchema);
export default Winner;
