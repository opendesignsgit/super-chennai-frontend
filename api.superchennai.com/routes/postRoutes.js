const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const multer = require('multer');
const path = require('path');
const { downloadPostsXLS } = require("../controllers/postController");
const { deletePostById } = require("../controllers/postController");

// const storage = multer.diskStorage({
//   destination: 'uploads/videos',
//   filename: (req, file, cb) => {
//     const uniqueName = 'video-' + Date.now() + path.extname(file.originalname);
//     cb(null, uniqueName);
//   },
// });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'video') {
      cb(null, 'uploads/videos');
    } else if (file.fieldname === 'image') {
      cb(null, 'uploads/images'); 
    }
  },
  filename: (req, file, cb) => {
    const uniqueName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });
router.post('/posts', upload.single('image'), postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get("/posts/download", downloadPostsXLS);
router.delete("/delete/:id", deletePostById)
module.exports = router;
