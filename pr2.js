const express=require("express");
const app=express();
const fs=require("fs");
const port=80;
const hostname="127.0.0.1";
app.use(express.urlencoded());
app.use(express.static('project2'));
let page=fs.readFileSync("project2/pr2.html");
app.get("/",(req,res)=>{
    res.status(200).end(page);
});
app.post("/",(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let ellaborate=req.body.ellaborate;
    res.status(200).end(page);
    let data=`The name of a person is ${name},email is ${email},contact number is ${phone} and more about user is ${ellaborate}`;
    fs.writeFileSync("data.txt",data);
});
app.listen(port,hostname,()=>{
    console.log("listening at the port 80");
});