const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

// Create post
router.post("/createPost", upload.single("file"), postsController.createPost);

// router.post("/createPost", upload.single("file"), (req, res) => {
//     if (req.file) {
//         postsController.createPost
//     } else {
//         postsController.createPost
//     }
//   });

// Like post
router.put("/likePost/:id", postsController.likePost);
// Delete Post
router.delete("/deletePost/:id", postsController.deletePost);


module.exports = router;