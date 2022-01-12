const express = require('express');
const app =express();

// This will allow to create the routes for the API
// ROUTES
app.get('/',(req,res)=>{
    res.send('We are home!');
})

// LISTENING
app.listen(3000);
