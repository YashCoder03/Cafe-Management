const bcrypt = require("bcryptjs")
const userModel = require("../Model/userModel"); 
const userService = require("../Services/userService");

// Create User 
// Path user/signup
//Post API is public
const createUser = async (req,res,next) =>{
    let {name , mobile, email, password } = req.body;
    var salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password , salt);

    userService.createUser(name,mobile,email,password);
    console.log(password);
    res.send("user Created");
};

// update User 
// Path user/update
//Update API is public

const updateUser = (req,res,next) =>{

    res.send("user Update");
}

// delete User 
// Path user/delete
// Delete API is public

const deleteUser = (req,res,next) =>{
    res.send("delete User");
}


// get User 
// Path user/update
// GET API is public

const getUser = (req,res,next) =>{
    res.send("Get User");
}


// getAll User 
// Path user/update
// GET API is public

const getAllUser = (req,res,next) =>{
    res.send("Get All User");
}

// Login User 
// Path user/login
// POST API is public
const loginUser = async (req,res,next) =>{
    
    let {email , password } = req.body;
    const dbpass = await userService.findUser(email);
    console.log(dbpass);
    if(!(dbpass == null) &&  await bcrypt.compare(password,dbpass))
    {
        res.send("Login Successful");
    }
    else
    {
        res.send("Access Denied");
    }
    
}

module.exports = { 
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
    getUser,
    loginUser
 };