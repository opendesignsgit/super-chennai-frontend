// const { likeVideo, getLikedVideos, getVideosWithLikes } = require("../models/videoLikesModel");

// const likeVideoHandler = async (req, res) => {
//   const { id } = req.body; // frontend sends {id}
//   const ipAddress =
//     req.headers["x-forwarded-for"]?.split(",")[0] || req.ip || "unknown";

//   if (!id) {
//     return res.status(400).json({ success: false, message: "id required" });
//   }

//   try {
//     const result = await likeVideo(id, ipAddress);
//     res.json(result);
//   } catch (error) {
//     console.error("Error liking video:", error);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// };

// const likedVideosHandler = async (req, res) => {
//   const ipAddress =
//     req.headers["x-forwarded-for"]?.split(",")[0] || req.ip || "unknown";

//   try {
//     const likedIds = await getLikedVideos(ipAddress);
//     res.json({ success: true, liked: likedIds });
//   } catch (error) {
//     console.error("Error fetching liked videos:", error);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// };

// const getVideosHandler = async (req, res) => {
//   try {
//     const videos = await getVideosWithLikes();
//     res.json({ success: true, videos });
//   } catch (error) {
//     console.error("Error fetching videos:", error);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// };

// module.exports = { likeVideoHandler, likedVideosHandler, getVideosHandler };


const { likeVideo, getLikedVideos, getVideosWithLikes,toggleLike  } = require("../models/videoLikesModel");

const likeVideoHandler = async (req, res) => {
  const { id, uuid } = req.body; 

  if (!id || !uuid) {
    return res.status(400).json({ success: false, message: "id and uuid required" });
  }

  try {
    const result = await likeVideo(id, uuid);
    res.json(result);
  } catch (error) {
    console.error("Error liking video:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const likedVideosHandler = async (req, res) => {
  const { uuid } = req.query;

  if (!uuid) {
    return res.status(400).json({ success: false, message: "uuid required" });
  }

  try {
    const likedIds = await getLikedVideos(uuid);
    res.json({ success: true, liked: likedIds });
  } catch (error) {
    console.error("Error fetching liked videos:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const getVideosHandler = async (req, res) => {
  try {
    const videos = await getVideosWithLikes();
    res.json({ success: true, videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const toggleLikeHandler = async (req, res) => {
  const { id, uuid } = req.body;
  if (!id || !uuid) {
    return res.status(400).json({ success: false, message: "id and uuid required" });
  }

  try {
    const result = await toggleLike(id, uuid);
    res.json(result);
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};


module.exports = { likeVideoHandler, likedVideosHandler, getVideosHandler,toggleLikeHandler  };
