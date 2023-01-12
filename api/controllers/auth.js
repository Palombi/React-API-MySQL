import db from "../connect.js";

export const register = (req, resp) => {
  //CHECK USER IF EXIST

  const q = "SELECT * FROM member WHERE member_name = ? ";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return resp.status(404).json("User not found!");
    console.log(data);

    return resp.status(404).json("User Not sure!");
  });

  //CREATE A NEW USER

  //Hash the password
};
export const login = (req, resp) => {
  //TODO
};
export const logout = (req, resp) => {
  //TODO
};
