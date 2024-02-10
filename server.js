const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config()

const port = process.env.PORT;
const indexRoutes = require("./src/routes/index")

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json())
app.get("/short", (req, res) => {
    res.render("index")
})
app.use("/", indexRoutes)
app.listen(port, () => {
    console.log("server is running at " + port);
})