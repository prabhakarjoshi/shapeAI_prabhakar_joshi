// const { response } = require("express");
// const express=require("express");
// const app=express();
// app.get("/",function(req,res){
//     // res.send("<h1>hello aliens</h1>");
// });
// app.listen(3000,function(){
//     // console.log("hello aliens");
// });
// import bodyParser;

const express = require('express');
const app = express();
var bodyParser =require("body-parser");

const port = 3000;
let resul;
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    console.log(resul);
    resul=Number(req.body.num1)+Number(req.body.num2);
    res.send("the answer is "+resul);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})