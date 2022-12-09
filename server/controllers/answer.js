import mongoose from "mongoose";
import questions from '../models/questions.js';

export const postAnswer = async (req, res) =>{
    const {id: _id} = req.params;
    const { noOfAnswers, answerBody, userAnswered,userId } = req.body;
    console.log("userId",userId)

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("unavilable questions...");
    }

    updateNoOfQuestions(_id, noOfAnswers);

    try {
        const updateQuestion = await questions.findByIdAndUpdate( _id, {$addToSet:{answer:[{answerBody,userAnswered,userId}]}});
        // const updateQuestion = await questions.findByIdAndUpdate(_id, {$addToSet: {'answer': [{answerBody,userAnswer, userId:req.userId}]}});
        return res.status(200).json(updateQuestion);
    } catch (error) {
        res.status(400).json(error);
    }
} 

export const updateNoOfQuestions = async (_id, noOfAnswers) =>{
    try {
        await questions.findByIdAndUpdate(_id, {$set: {'noOfAnswer': noOfAnswers}})
    } catch (error) {
        console.log(error);
    }
}
export const deleteAnswer = async (req, res) =>{
    // const {id:_id}= req.params;
    // const {answerId, noOfAnswer} = req.body;

    // if(!mongoose.Types.ObjectId.isValid(_id)){
    //     return res.status(404).send("Answer unavilable...");
    // }

    // updateNoOfQuestions(_id, noOfAnswer);

    // try {
    //    await questions.updateOne
    // } catch (error) {
    //     console.log(error);
    // }
}


export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value, userId } = req.body;
    console.log("userId",userId)
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        const question = await questions.findById(_id)
        const upIndex = question.upVote.findIndex((id) => id === String(userId))
        const downIndex = question.downVote.findIndex((id) => id === String(userId))

        if(value === 'upVote'){
            if(downIndex !== -1){
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            } 
            if(upIndex === -1){
                question.upVote.push(userId)
            }else{
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }
        else if(value === 'downVote'){
            if(upIndex !== -1){
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            } 
            if(downIndex === -1){
                question.downVote.push(userId)
            }else{
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
        }
        await questions.findByIdAndUpdate( _id, question )
        res.status(200).json({ message: "voted successfully..."})
    } catch (error) {
        res.status(404).json({ message: "id not found"})
    }
}


