import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import charityRoutes from './routes/charityRoutes.js';
import scoreRoutes from './routes/scoreRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import drawRoutes from './routes/drawRoutes.js';
import winnerRoutes from './routes/winnerRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/charities', charityRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/draws', drawRoutes);
app.use('/api/winners', winnerRoutes);

app.use(errorMiddleware);

export default app;
