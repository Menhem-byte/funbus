const express = require("express");
const cors = require("cors");
const http = require("http");
const {
  app: { PORT },
} = require("./config");
const bodyParser = require("body-parser");
const app = express();
const webServiceRouter = require("./routes/webServices");
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
const corsOptions = {
  origin: [
    "http://192.168.1.119:3000",
    "http://localhost:3000",
    "http://localhost:8080",
  ],
  credential: true,
  authenticate: true,
  authorization: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  next();
});

app.set("etag", false);

process.on("uncaughtException", (err, origin) => {
  console.log(err);
  process.exit(0);
});

process.on("SIGTERM", (err, origin) => {
  console.log(err);
  process.exit(0);
});
process.on("SIGINT", (err, origin) => {
  console.log(err);
  process.exit(0);
});
app.use("/", webServiceRouter);
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log("http server is running on port: ", PORT);
  console.log("http server is running on process: ", process.pid);
});
