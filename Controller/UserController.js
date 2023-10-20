const { get } = require("../Routes/userRoute");

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

module.exports = { 
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
    getUser
 };