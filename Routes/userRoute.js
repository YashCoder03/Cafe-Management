const express = require("express");
const UserController = require("../Controller/UserController");
const router = express.Router();

router.post("/login",UserController.loginUser);
router.post("/signup",UserController.createUser);
router.put("/update",UserController.updateUser);
router.delete("/delete",UserController.deleteUser);
router.get("/getUser",UserController.getUser);
router.get("/getalluser",UserController.getAllUser);

module.exports= router;