// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
});


app.post("/", function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    res.send("Thank you for posting");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

// 393ad02a4bd45ac4a055a2671880aa72-us18