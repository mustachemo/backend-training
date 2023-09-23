import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true, // This will help to avoid DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
      useUnifiedTopology: true, // This will help to avoid DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
    });
    console.log('Successfuly connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
