import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, enum: ['monthly', 'yearly'], required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['active', 'pending', 'cancelled'], default: 'active' },
  startDate: { type: Date, default: Date.now },
  renewDate: { type: Date, required: true },
  paymentStatus: { type: String, enum: ['paid', 'pending'], default: 'paid' },
  createdAt: { type: Date, default: Date.now },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
