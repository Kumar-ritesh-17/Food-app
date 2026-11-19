import express from "express"
import connectDB from "./config/db.js";

const app = express();
const PORT = 4000;


app.get("/",(req,res)=>{
    res.send("API Working");
})

try {
    await connectDB();
    app.listen(PORT,()=>{
        console.log(`Server started at http://localhost:${PORT}`)
    })
} catch (error) {
    process.exit(0)
}


