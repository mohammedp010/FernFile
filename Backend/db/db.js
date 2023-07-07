import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const dbCon = async () => {
    // const DB_URL = process.env.MONGO_URI;
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Error while connecting the DB ', error.message);
    }
}

export default dbCon;