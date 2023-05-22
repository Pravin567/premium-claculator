const express = require ("express");
const app = express();
// app.use(express.static(__dirname + 'public'));
//get method
app.use(express.static("public"));
app.get("/",(req,res)=>{
    // res.render("index.html")
});
app.listen(3000,()=>{
    console.log("server is running");
});