const express=require("express");
require("./db/config");
const test=require("./db/user")
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,resp)=>
{
    resp.json("hello");
})




app.listen(5000 , ()=>
{
    console.log("good");
});