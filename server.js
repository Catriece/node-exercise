import express from "express";
import config from "./config";
// TODO: import router from routes/
import apiRouter from "./routes";
import morgan from "morgan";

const app = express();

//parses incoming request bodys to JSON
//attacheds JSON to body parameter of the request object
app.use(express.json());

app.use(morgan("common"));

// TODO: use the imported router to handle all requests
//Reads: for ever request that starts with api, the middleware I will use is my apiRouter
app.use("/api", apiRouter);

//middleware error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
