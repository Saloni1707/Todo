// initialise empty package.json and for any node project using npm init -y
//patch basically updates the files 
//Understand basic HTTP server 
const express = require("express")
const app = express()
//route handlers 
app.get('/',function(req,res){
    //gives all the information regarding the request 
    res.send("hello world")
})

app.get('/asd',function(req,res){
    res.json({
        "name":saloni ,
        "age":18,
    })
})

app.listen(3000) //which port to listen on ->listening infinitely on this port 

//store the data in a file , foundation for file system 
//add user logic to it as well 
