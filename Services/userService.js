const { where } = require("sequelize");
const userModel = require("../Model/userModel");
const { use } = require("../Routes/userRoute");


const createUser = async (name , mobile , email , password) => {
    const user = userModel.create({name,mobile,email,password});
    console.log();
}

const findUser = async (email) => {
    const user = await userModel.findOne({where : {email}});

    if(user === null)
    {
        return null;
    }
    else
    {
        return user.password;
    }
}
const isEmailExists = async (email) => {
    const user = await userModel.findOne({where : {email}});

    if(user != null)
    {
        return true;
    }
    else
    {
        return false;
    }
}
module.exports = {
    createUser,
    findUser,
    isEmailExists
}