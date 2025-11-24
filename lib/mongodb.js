import mongoose from "mongoose";
let isConnected = false;

export async function connectDB(){
    if(isConnected){
        console.log("MongoDB already connected");
        return
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true;
        console.log("Mongo Connected")
    }catch(err){
        console.log("Error: ",err);
    }
}