import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/git-hub-backend")
        console.log("DB connected successfully.")
    } catch (error) {
        console.log("DB connection failed")
        throw error
    }
}

export default connectDB;