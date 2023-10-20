require("dotenv").config();

let mysql = require("mysql2");

let connection = mysql.createConnection({
    localhost : process.env.DB_HOST,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME

});

connection.connect((err) => {
    if (err)
    {
        console.log(err);
        throw err;
    }
    console.log("Connected");
});