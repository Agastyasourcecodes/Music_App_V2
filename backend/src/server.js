import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app=express();
app.use(cors());

app.get("/songs",async(req,res)=>{
 
    const q=req.query.search || "";
    const url=`https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.JAMENDO_KEY}&search=${q}&limit=5&format=json`;
    const response =await fetch(url); //call api
    const data=await response.json();// convert api data into js
    res.json(data);



});

app.listen(process.env.PORT,()=>
    console.log("Backend runnint on port", process.env.PORT) // server start from .env file 
);