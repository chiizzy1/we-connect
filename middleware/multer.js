const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 2000000 // 1000000 Bytes = 1 MB
  },
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});



// Video Upload

// const videoUpload = multer({
//     storage:  multer.diskStorage({}),
//     limits: {
//     fileSize: 10000000 // 10000000 Bytes = 10 MB
//     },
//     fileFilter(req, file, cb) {
//         let ext = path.extname(file.originalname);
//       // upload only mp4 and mkv format
//       if (!ext.match(/\.(mp4|MPEG-4|mkv)$/)) { 
//         cb(new Error("File type is not supported"), false);
//         return;
//       }
//       cb(null, true)
//    }
// })
