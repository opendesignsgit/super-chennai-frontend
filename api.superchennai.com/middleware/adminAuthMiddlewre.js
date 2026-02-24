//########### ADMIN TOKEN #################

module.exports = function (req, res, next) {
  const token = req.body.admin_key || req.headers["x-admin-key"];

  if (!token || token !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ message: "Invalid Admin Key" });
  }

  next();
};
