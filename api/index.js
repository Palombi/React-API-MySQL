import Express from "express";
import userRoutes from "./routes/user.js";

const app = Express();

app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("API Working!");
});
