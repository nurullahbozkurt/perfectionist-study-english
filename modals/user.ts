import {Schema,model,models} from 'mongoose'
import bcrypt from "bcrypt";


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "user",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next()
  }
    this.password = await bcrypt.hash(this.password, 10)
    next()
});

export default models.User || model('User', userSchema);