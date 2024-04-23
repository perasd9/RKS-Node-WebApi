const authenticate = (req, res, next) => {
  const userCookie = req.cookies.user;
  const adminCookie = req.cookies.admin;

  if (userCookie == undefined && adminCookie == undefined) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  if (
    adminCookie !== undefined &&
    req.originalUrl.includes("karta") &&
    req.route.methods.post == true
  ) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  if (
    userCookie !== undefined &&
    req.originalUrl.includes("dogadjaj") &&
    req.route.methods.post == true
  ) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
};

module.exports = authenticate;
