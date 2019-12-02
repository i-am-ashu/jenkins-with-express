const express = require ("express");
const connect = require("../db")

var connection = connect.connect();
var empRouter = express();

// connection.connect();

empRouter.use(express.json());

empRouter.get("/",(request,response)=>
{
    var query="select * from employee";
    var result = {};
    connection.query(query,(error,data)=>
    {
        if( error )
        {
            result['status'] = 'error'
            result['error'] = error;
        }else{
            result['status'] = 'success'
            result['data'] = data;
        }
        response.send(result);
    })
})

module.exports=empRouter;