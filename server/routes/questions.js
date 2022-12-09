import express from 'express';
const router = express.Router();

import { askQuestions,getAllQuestion, deleteQuestion } from '../controllers/questions.js'
import auth from '../middlewares/auth.js'

router.post('/askquestions',  askQuestions);
router.get('/questions/get', getAllQuestion);
router.delete('/questions/delete/:id', deleteQuestion)


export default router