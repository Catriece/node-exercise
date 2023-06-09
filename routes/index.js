import express from "express";
// TODO: import router from users.route
import userRouter from "./users.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
//matching /api already so if it further matches /users, I will use and send requests to userRouter
router.use("/users", userRouter);

export default router;
