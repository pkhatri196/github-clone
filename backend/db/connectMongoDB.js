//We are using db for authentication purpose to save the data of our users.

import mongoose  from 'mongoose';

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB Connected");
    } catch (error) {
        console.log("Error connecting to MongoDB :",error.message);
    }
}