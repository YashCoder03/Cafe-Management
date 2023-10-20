const express = require("express");

const app = express();

const PORT  = process.env.PORT || 5000;

app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

app.listen(PORT,console.log("server is listening"));

module.exports = {app};