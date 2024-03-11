// including required modules
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/passwordreset', function (req, res) {
    //get users email from for data
    //find user in database
    //make one time token
    //hash current password from database 
    //make secret with the users password and the date created
    //encode the key
    //end email with link to rest 
})

//get data from email
app.get('/resetpassword/:id/:token', function(req, res) {

})

//handle forms post with new password
app.post('/resetpassword', function(req, res){

})



