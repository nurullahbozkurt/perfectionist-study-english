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
   }

});



export default models.UserAnswer || model('UserAnswer', userAnswerSchema);