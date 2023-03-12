const express=require("express");
const{chats}=require("./data/data");
const dotenv=require("dotenv");
const connectDB=require("./config/db")
const userRoutes=require("./routes/userRoutes")


dotenv.config();
connectDB();
const app=express();

app.use(express.json()) //to accept json data

var cors=require('cors');

 app.get('/',(req,res)=>
 {
    res.send("API is running ");
 });


const PORT=process.env.PORT || 8000;

app.listen(`${PORT}`, console.log(`Server Started on PORT ${PORT}`));
