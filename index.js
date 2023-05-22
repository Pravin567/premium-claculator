const express = require ("express");
const app = express();
var mysql = require('mysql');
const cors = require("cors");
app.use(express.json({limit: '50mb'}));
app.options(cors()); 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "websitelogin"
});

 
// app.use(express.static(__dirname + 'public'));
//get method
app.use(express.static("public"));
app.post("/get",async(req,res)=>{
    // res.render("index.html")
   //let obj = JSON.parse(req.body);
   // if(obj.Nam==2000){
   con.connect(async function (err) {
            if (err)
                throw err;
            console.log("Connected!");
            var sql = "SELECT * FROM `pre_cal`";
            con.query(sql, function (err, result) {
                if (err)
                    throw err;
                //   console.log(result);
                res.send(JSON.stringify(result));
            });
            con.end();
        });
//}
// else{
//     res.send("error");
// }
}
);
app.get("/",async(req,res)=>{
    // res.render("index.html")
   con.connect(async function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM `pre_cal`";
        con.query(sql, function (err, result) {
            if (err)
                throw err;
            //   console.log(result);
            res.send(result);
        });
    });
});
app.listen(3000,()=>{
    console.log("server is running");
});