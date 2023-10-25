const express = require("express");
const UserController = require("../Controller/UserController");
const router = express.Router();
const checkUser = require("../Middleware/userValidation");
const jwtAuth = require("../Middleware/jwtAuthentication");


router.post("/login",jwtAuth.jwtAuth,UserController.loginUser);
router.post("/signup",checkUser.checkUser(),UserController.createUser);
router.put("/update",UserController.updateUser);
router.delete("/delete",UserController.deleteUser);
router.get("/getUser",UserController.getUser);
router.get("/getalluser",UserController.getAllUser);

module.exports= router;