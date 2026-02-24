// const db = require("../config/db");
// const likeVideo = async (videoId, ipAddress) => {
//   try {
//     return await db.transaction(async (trx) => {
//       // already liked check
//       const exists = await trx("video_likes")
//         .where({ video_id: videoId, ip_address: ipAddress })
//         .first();

//       if (exists) {
//         return { success: false, message: "Already liked" };
//       }

//       // insert new like
//       await trx("video_likes").insert({
//         video_id: videoId,
//         ip_address: ipAddress,
//       });

//       // count likes for this video_id
//       const countResult = await trx("video_likes")
//         .where({ video_id: videoId })
//         .count("id as cnt")
//         .first();

//       return {
//         success: true,
//         message: "Liked successfully",
//         likeCount: parseInt(countResult.cnt, 10),
//       };
//     });
//   } catch (err) {
//     console.error("DB Error in likeVideo():", err);
//     throw err;
//   }
// };

// const getLikedVideos = async (ipAddress) => {
//   try {
//     const likes = await db("video_likes")
//       .where({ ip_address: ipAddress })
//       .select("video_id");

//     return likes.map((row) => row.video_id);
//   } catch (err) {
//     console.error("DB Error in getLikedVideos():", err);
//     throw err;
//   }
// };

// const getVideosWithLikes = async () => {
//   try {
//     const videos = await db("video_likes")
//       .select("video_id")
//       .count("id as like_count")
//       .groupBy("video_id");

//     return videos; // [{ video_id: 1, like_count: 5 }, ...]
//   } catch (err) {
//     console.error("DB Error in getVideosWithLikes():", err);
//     throw err;
//   }
// };

// module.exports = { likeVideo, getLikedVideos, getVideosWithLikes };

const db = require("../config/db");

const likeVideo = async (videoId, uuid) => {
  try {
    return await db.transaction(async (trx) => {
      // already liked check
      const exists = await trx("video_likes")
        .where({ video_id: videoId, user_uuid: uuid })
        .first();

      if (exists) {
        return { success: false, message: "Already liked" };
      }

      // insert new like
      await trx("video_likes").insert({
        video_id: videoId,
        user_uuid: uuid,
      });

      // count likes for this video_id
      const countResult = await trx("video_likes")
        .where({ video_id: videoId })
        .count("id as cnt")
        .first();

      return {
        success: true,
        message: "Liked successfully",
        likeCount: parseInt(countResult.cnt, 10),
      };
    });
  } catch (err) {
    console.error("DB Error in likeVideo():", err);
    throw err;
  }
};

const getLikedVideos = async (uuid) => {
  try {
    const likes = await db("video_likes")
      .where({ user_uuid: uuid })
      .select("video_id");

    return likes.map((row) => row.video_id);
  } catch (err) {
    console.error("DB Error in getLikedVideos():", err);
    throw err;
  }
};

const getVideosWithLikes = async () => {
  try {
    const videos = await db("video_likes")
      .select("video_id")
      .count("id as like_count")
      .groupBy("video_id");

    return videos; // [{ video_id: 1, like_count: 5 }, ...]
  } catch (err) {
    console.error("DB Error in getVideosWithLikes():", err);
    throw err;
  }
};

const toggleLike = async (videoId, uuid) => {
  try {
    return await db.transaction(async (trx) => {
      const exists = await trx("video_likes")
        .where({ video_id: videoId, user_uuid: uuid }) // 👈 fix here
        .first();

      if (exists) {
        // Unlike → delete row
        await trx("video_likes")
          .where({ video_id: videoId, user_uuid: uuid }) // 👈 fix here
          .del();
      } else {
        // Like → insert
        await trx("video_likes").insert({
          video_id: videoId,
          user_uuid: uuid, // 👈 fix here
        });
      }

      // latest count
      const countResult = await trx("video_likes")
        .where({ video_id: videoId })
        .count("id as cnt")
        .first();

      return {
        success: true,
        liked: !exists, // true = liked now, false = unliked
        likeCount: parseInt(countResult.cnt, 10),
      };
    });
  } catch (err) {
    console.error("DB Error in toggleLike():", err);
    throw err;
  }
};





module.exports = { likeVideo, getLikedVideos, getVideosWithLikes ,toggleLike};
