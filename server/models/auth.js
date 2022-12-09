import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true
   },
   email: {
      type: String,
      require: true
   },
   password: {
      type: String,
      require: true
   },
   about: {
      type: String,
      require: true
   },
   tags: {
      type: String,
      require: true
   },
   joinedOn: {
      type: Date,
      //  default:Date.now()
   }
})

// const questionsSchema = new mongoose.Schema({
//    questionsTitle: {
//       type: String,
//       require: "Question must have a title"
//    },
//    questionsBody: {
//       type: String,
//       require: "Question must have a body"
//    },
//    questionsTags: {
//       type: String,
//       require: "Question must have a tags"
//    },
//    noOfAnswers: {
//       type: Number,
//       default: 0
//    },
//    upVote: {
//       type: [String],
//       default: []
//    },
//    downVote: {
//       type: [String],
//       default: []
//    },
//    userPosted: {
//       type: String,
//       require: "Questions must have an author"
//    },
//    // userId:{
//    //  type:String,
//    // },
//    askedOn: {
//       type: Date, default: Date.now
//    },
//    answer: {
//       answerBody: String,
//       userAnswered: String,
//       userId: String,
//       answeredOn: {
//          type: Date,
//          default: Date.now
//       }
//    }

// })

const users = mongoose.model('users', userSchema);
export default users
