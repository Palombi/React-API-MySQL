import Express from "express";
import { getUser } from "../controllers/users.js";

const router = Express.Router();

router.get("/find/UserId", getUser);

export default router;
