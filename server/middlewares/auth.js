import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body = req.body || {};
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({ success: false, message: "Not authorized" });
    }

    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default userAuth;
