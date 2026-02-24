const express = require("express");
const { likeVideoHandler, likedVideosHandler, getVideosHandler,toggleLikeHandler } = require("../controllers/videoLikesController");

const router = express.Router();

// router.post("/like", likeVideoHandler);
router.post("/like", toggleLikeHandler);

router.get("/liked", likedVideosHandler);
router.get("/videoslikes", getVideosHandler);

module.exports = router;
