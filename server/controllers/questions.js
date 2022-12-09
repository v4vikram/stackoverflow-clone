import mongoose from 'mongoose'
import questionsModel from '../models/questions.js'

export const askQuestions = async (req, res) => {
    const questions = req.body;
    console.log(questions)

    const postQuestion = await questionsModel.create(questions);

    try {
        await postQuestion.save();
        res.status(201).json({ message: "Question sucessfuly posted" });
    } catch (error) {
        res.status(409).json({ message: "Question couldn't posted" })
    }

}

export const getAllQuestion =  async (req, res) => {
    try {
        const questionsList = await questionsModel.find();
        console.log(questionsList)
        return res.json(questionsList)
    } catch (error) {
       console.log(error); 
    }
}

export const deleteQuestion = async (req, res) =>{
    const {id: _id} = req.params;
    console.log(req.params)
        
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("unavilable questions...");
    }
    try {
        await questionsModel.findByIdAndRemove(_id);
        res.status(200).json({message: "Data deleted sucessfully..."})
    } catch (error) {
        console.log(error)
        res.status(200).json({message: `data not delted ${error}`})

    }
}

