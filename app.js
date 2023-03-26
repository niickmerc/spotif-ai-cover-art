const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const PORT = 8888;

const app = express();  // create new express application

app.use(express.static(__dirname + '/public'));  // connect html front-end to express application
app.use(cors())
app.use(cookieParser());
app.use('/', routes);  // connect index.js file to express application. we'll define all routes within routes/index.js

// set express app to listen on port 3000
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully running, and app is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);