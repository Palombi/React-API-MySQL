import { db } from "../connect.js";

export const getUser = (req, resp) => {
  //TODO
  const answer = "Andrea";

  const q = "SELECT * FROM member WHERE member_name = ?";

  db.query(q, answer, (err, data) => {
    if (err) return resp.status(404).json("User not found!");
    console.log(data[0].member_name);

    return;
  });
};
