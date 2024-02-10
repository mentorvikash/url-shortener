const express = require('express');
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("welcome to nodejs project")
})

app.listen(port, () => {
    console.log("server is running at " + port);
})