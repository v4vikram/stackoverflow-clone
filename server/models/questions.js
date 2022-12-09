import mongoose from "mongoose";

const questionsSchema = mongoose.Schema({
    questionTitle: {
        type: String,
        require: "Question must have a title"
    },
    questionBody: {
        type: String,
        require: "Question must have a body"
    },
    questionTags: {
        type: [String],
        require: "Question must have a tags"
    },
    noOfAnswers: {
        type: Number,
        default: 0
    },
    upVote: {
        type: [String],
        default: []
    },
    downVote: {
        type: [String],
        default: []
    },
    userPosted: {
        type: String,
        require: "Questions must have an author"
    },
    userId: {
        type: String,
    },
    askedOn: {
        type: Date, default: Date.now
    },
    answer:[
        {
            userId:String,
            answeredOn: { type: Date, default: Date.now},
            answerBody:{
                type: String,
                require:true,
            },
            userAnswered:{
                type: String,
                require:true,
            },
        }
    ]
    
    

})

const questionsModel = new mongoose.model('questions', questionsSchema);
export default questionsModel;