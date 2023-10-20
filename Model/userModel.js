const sequelize = require("../Db/DbConnection");
const { DataTypes, DATE, Model } = require('sequelize');


const User = sequelize.define("user",{

    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false 
    },
    mobile : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }

});

User.sync({alter : true});



module.exports = User;