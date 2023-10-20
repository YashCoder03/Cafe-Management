const bcrypt = require("bcryptjs")

// Create User 
// Path user/signup
//Post API is public
const createUser = (req,res,next) =>{
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
const loginUser = (req,res,next) =>{
    
    let {username , password } = req.body;
    if(username = "yash" && password == "1234")
    {
        res.send("User is login");
    }
    else
    {
        res.send("access Denied");
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