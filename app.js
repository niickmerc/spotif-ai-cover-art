const express = require('express');  
const routes = require('./routes');
const cookieParser = require('cookie-parser')  // allows for parsing of http request cookies
const cors = require('cors');  // package for providing a Connect/Express middleware that can be used to enable CORS with various options
const PORT = 8888;  // the port for our app

const app = express();  // create new express application

app.use(express.static(__dirname + '/public'));  // connect html front-end to express application
app.use(cors())  // enable cors
app.use(cookieParser());  // enable parsing of http request cookies
app.use('/', routes);  // enable commmunication with routes/index.js for all routing activities

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully running, and app is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);