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


app.post("/login", async (req, resp) => {
    try {
        const data = new test(req.body);
        const result = await data.save();
        resp.send(result);
    } catch (error) {
        resp.status(500).json({ error: "An error occurred" });
    }
});

app.listen(5000 , ()=>
{
    console.log("good");
});
