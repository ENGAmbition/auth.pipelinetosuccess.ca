// including required modules
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// create webserver that allows user to reset password (temporary will see how this works with actual side)
app.listen(3000, function () {
    console.log('Node started on port 3000!')
    console.log("test")
});

//form that asks user for their email address to begin password reset
app.get('/forgotpassword', function (req, res) {
    res.send('<form action="/passwordreset" method="POST">' +
        '<input type="email" name="email" value="" placeholder="Enter your email address..." />' +
        '<input type="submit" value="Reset Password" />' +
        '</form>');
});