import express from 'express';
import {postAnswer, deleteAnswer,voteQuestion} from '../controllers/answer.js';
import auth from '../middlewares/auth.js';
const  router = express.Router();

router.patch('/answer/post/:id',  postAnswer)
router.patch('/answer/delete/:id',  deleteAnswer)
router.patch('/questions/vote/:id',  voteQuestion)


export default router
