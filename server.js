import express from "express"

const app = express();
const PORT = 4000;


app.get("/",(req,res)=>{
    res.send("API Working");
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})

