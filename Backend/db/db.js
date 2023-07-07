import mongoose, { mongo } from "mongoose";

const DB_URL = `mongodb+srv://mrx010:EVfk7tG4fwukQdL7@cluster0.sdugpml.mongodb.net/?retryWrites=true&w=majority`;
const dbCon = async () => {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Error while connecting the DB ', error.message);
    }
}

export default dbCon;