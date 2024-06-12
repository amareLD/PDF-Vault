import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import pdfRoutes from './routes/pdfs.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

connectDB(); //connect to MongoDB

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//Cookie parser middleware
app.use(cookieParser());

const port = process.env.PORT || 3001;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/pdfs', pdfRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
