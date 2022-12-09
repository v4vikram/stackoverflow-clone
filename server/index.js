import express from 'express';
import cors from 'cors';
import './db/config.js';
const app = express();
const PORT = process.env.PORT || 5000;

// Import Routes
import userRoute from './routes/user.js';
import questionsRoute from './routes/questions.js';
import answerRoute from './routes/answer.js';

// Middlware
app.use(cors());
app.use(express.json());

// Route
app.use('/', userRoute);
app.use('/', questionsRoute)
app.use('/',answerRoute)

// Server
app.listen(PORT, () => {
    console.log(`Server Run on http://localhost:${PORT}`)
});
