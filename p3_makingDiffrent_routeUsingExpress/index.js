const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home Route")
})

app.get('/about', (req, res) => {
    res.send("ABOUT Route")
})

app.get('/hobbies', (req, res) => {
    res.sendFile(__dirname+"/hobbies.html");
})

app.listen(3000,()=>{
    console.log("server listening to Port 3000")
})
