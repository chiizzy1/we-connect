const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
// const Comment = require("../models/Comment");


module.exports = {
    getUser: async (req, res) =>{
        try {
            const user = await User.findById({ _id: req.params.id });
            res.render("edit.ejs", { image : user.profilePic, 
                userName: user.userName, country: user.country, city: user.city, 
                campus: user.campus, sex: user.sex, linkedIn: user.linkedin, 
                twitter: user.twitter, mobile: user.mobile, desc: user.description });
          } catch (err) {
            console.log(err);
        }
    },
    changePic : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeUserName : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          } 
    },
    changeCountry : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeCity : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeCampus : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeSex : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeLinkedin : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeTwitter : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeMobile : async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    changeDescription: async (req, res) =>{
        try {
            await User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { likes: 1 },
              }
            );
            console.log("Likes +1");
            res.redirect(`/post/${req.params.id}`);
          } catch (err) {
            console.log(err);
          }
    },
    deleteUser: async (req, res) =>{
        try {
            // Find post by id
            let user = await User.findById({ _id: req.params.id });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(user.cloudinaryId);
            // Delete post from db
            await User.remove({ _id: req.params.id });
            console.log("Deleted User");
            res.redirect("/");
          } catch (err) {
            res.redirect("/");
        }
    },
}

// module.exports = {
//   getEdit: async (req, res) => {
//     try {
//       const posts = await posts.find({ user: req.user.id });
//       res.render("profile.ejs", { posts: posts, user: req.user });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getPost: async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
//       res.render("post.ejs", { post: post, user: req.user, comments: comments });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   createPost: async (req, res) => {
//     try {
//       // Upload image to cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path);

//       await Post.create({
//         title: req.body.title,
//         image: result.secure_url,
//         cloudinaryId: result.public_id,
//         caption: req.body.caption,
//         likes: 0,
//         user: req.user.id,
//       });
//       console.log("Post has been added!");
//       res.redirect("/profile");
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   deleteProfile: async (req, res) => {
//     try {
//       // Find post by id
//       let post = await Post.findById({ _id: req.params.id });
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinaryId);
//       // Delete post from db
//       await Post.remove({ _id: req.params.id });
//       console.log("Deleted Post");
//       res.redirect("/profile");
//     } catch (err) {
//       res.redirect("/profile");
//     }
//   },
// };
