import { getUserById } from "../module/user/UserModule.js";

export const userAuth = async (req, res, next) => {
  //   const isAuthTrue = true;
  /// check the auth
  const { authorization } = req.headers;
  const user = await getUserById(authorization);
  if (user?._id) {
    req.body.userId = authorization;
    next();
    return;
  }
  user
    ? next()
    : res.status(403).json({
        status: "error",
        message: "Unauthorized",
      });
};
