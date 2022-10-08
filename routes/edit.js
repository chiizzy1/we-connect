const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const editController = require("../controllers/edit");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//Edit User Profile details

//Edit Routes - simplified for now
router.get("/:id", ensureAuth, editController.getUser);

// Update User Details
router.put("/editProfile/:id", editController.updateProfile);

// change profile pic
router.put("/editProfileImage/:id", upload.single("file"), editController.changeImage);

// delete User
router.delete("/deleteUser/:id", editController.deleteUser);




module.exports = router; 