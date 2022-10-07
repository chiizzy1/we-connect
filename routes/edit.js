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
//  router.put("/editProfilePic/:id", editController.changePic);
// change userName
//  router.put("/editUserName/:id", editController.changeUserName); 
// change country
//  router.put("/editCountry/:id", editController.changeCountry);
// change city
//  router.put("/editCity/:id", editController.changeCity);
// change campus
//  router.put("/editCampus/:id", editController.changeCampus);
// change sex
//  router.put("/editSex/:id", editController.changeSex);
// change linkedin
//  router.put("/editLinkedin/:id", editController.changeLinkedin);
// change twitter
//  router.put("/editTwitter/:id", editController.changeTwitter);
// change mobile
//  router.put("/editMobile/:id", editController.changeMobile);
// change description
// router.put("/editDescription/:id", editController.changeDescription);


// delete User
router.delete("/deleteUser/:id", editController.deleteUser);




module.exports = router; 