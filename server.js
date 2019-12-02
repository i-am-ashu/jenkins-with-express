const express =require("express")
var app = express();

const empRouter = require("./routes/employee")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  
app.use("/employee",empRouter);

app.listen(9009,'0.0.0.0',()=>
{
    console.log("server started on port 9009");
})
