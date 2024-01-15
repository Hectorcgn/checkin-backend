import { getDb } from "../utils/db.js";
import { createToken } from "../utils/token.js";

const COL = "users";

export const login = async (req, res) => {
  const db = await getDb();
  const userData = await db
    .collection(COL)
    .findOne({ username: req.body.username, password: req.body.password });
  res.cookie("token", createToken({ user: userData._id }), {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    path: "/",
  });
  res.json({ id: userData._id, nickname: userData.nickname });
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  console.log("test");
  res.end();
};
