import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || '';

const connectMongoDB = async () => {
    if(mongoose.connection.readyState >= 1) return
    try {
        await mongoose.connect(MONGODB_URI);
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;
