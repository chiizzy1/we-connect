const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
// const Comment = require("../models/Comment");


module.exports = {
    getUser: async (req, res) =>{
        try {
            const user = await User.findById({ _id: req.params.id });
            res.render("edit.ejs", { person: req.params.id, image : user.profilePic, 
                userName: user.userName, country: user.country, city: user.city, 
                campus: user.campus, sex: user.sex, linkedIn: user.linkedin, 
                twitter: user.twitter, mobile: user.mobile, desc: user.description });
          } catch (err) {
            console.log(err);
        }
    },
    updateProfile: async (req, res) =>{
          try {
              // const user = await User.findById({ _id: req.params.id });
              await User.findOneAndUpdate(
                { _id: req.params.id },
                {
                  $set :
                      {
                        "userName" : req.body.userName,
                        "country" : req.body.country,
                        "city" : req.body.city,
                        "campus" : req.body.campus,
                        "sex" : req.body.sex,
                        "twitter" : req.body.twitter,
                        "linkedin" : req.body.linkedIn,
                        "mobile" : req.body.mobile,
                        "description" : req.body.desc,
                      },
                }
              );
              console.log("profile updated");
              res.redirect(`/profile`);
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



    // changePic : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeUserName : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       } 
    // },
    // changeCountry : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeCity : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeCampus : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeSex : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeLinkedin : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeTwitter : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeMobile : async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },
    // changeDescription: async (req, res) =>{
    //     try {
    //         await User.findOneAndUpdate(
    //           { _id: req.params.id },
    //           {
    //             $inc: { likes: 1 },
    //           }
    //         );
    //         console.log("Likes +1");
    //         res.redirect(`/post/${req.params.id}`);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // },