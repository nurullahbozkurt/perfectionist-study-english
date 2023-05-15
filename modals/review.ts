import { Schema, model, models } from 'mongoose'

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
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
    }
});

export default models.Review || model('Review', reviewSchema);