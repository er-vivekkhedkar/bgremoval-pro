import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/bgremover`);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process if the connection fails
    }
};

export default connectDB;
