import { Schema, model, models } from 'mongoose'

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    sentence: {
        type: String,
    },
    yourSentence: {
        type: String,
    },
    correctSentence: {
        type: String,
    },
    reviewNote: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    enabled :{
        type: Boolean,
        default: true
    },
    grammar :{
        type:String
    },
    sendToTeacher :{
        type:Boolean,
        default: false
    },
    teacherAnswer :{
        type:String,
        default: null
    },
},

);


export default models.Review || model('Review', reviewSchema);