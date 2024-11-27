import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export async function database(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected successfully')
    } catch (error) {
        console.log(error)
    }

}