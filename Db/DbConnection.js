require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    localhost : process.env.DB_HOST,
    dialect : "mysql",
    port : 3306
});

try{
    sequelize.authenticate();
    console.log("Conntected");
}
catch(error){
    console.error("unable to connected to database");
}


module.exports = sequelize;