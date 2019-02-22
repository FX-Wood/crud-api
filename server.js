const express = require('express');
require('dotenv').config()

const app = express();


app.use(express.static('static'))

app.listen(process.env.PORT
    , function() {
        console.log('crud-api is running');
        console.log('listening on port: ' + process.env.port);
    })