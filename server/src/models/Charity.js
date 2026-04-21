import mongoose from 'mongoose';

const charitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: String,
  impact: String,
  imageUrl: String,
  donationShare: { type: Number, default: 70 },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Charity = mongoose.model('Charity', charitySchema);
export default Charity;
