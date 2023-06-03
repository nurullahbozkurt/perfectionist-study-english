import {Schema,model,models} from 'mongoose'


const userAnswerSchema = new Schema({
   user:{
         type: Schema.Types.ObjectId,
   },
   topic:{
            type: String,
   },
   sentence:{
            type: String,
   },
   userSentence:{
            type: String,
   },
   correctSentence:{
            type: String,
   },
   createdAt:{
            type: Date,
            default: Date.now,
      },

});



export default models.UserAnswer || model('UserAnswer', userAnswerSchema);