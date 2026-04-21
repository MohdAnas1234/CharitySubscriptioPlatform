import mongoose from 'mongoose';

const drawSchema = new mongoose.Schema({
  month: { type: String, required: true },
  numbers: [{ type: Number, required: true }],
  prizePool: { type: Number, default: 0 },
  jackpotCarried: { type: Number, default: 0 },
  resultsPublished: { type: Boolean, default: false },
  winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Winner' }],
  createdAt: { type: Date, default: Date.now },
});

const Draw = mongoose.model('Draw', drawSchema);
export default Draw;
