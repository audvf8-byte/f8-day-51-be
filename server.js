const express = require("express");
const cors = require("cors");
const rootRouter = require("./src/routes");
const responseJson = require("./src/middlewares/response-json");
const notFoundHandler = require("./src/middlewares/not-found");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://[your-username].github.io"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Global middleware
app.use(express.json());
app.use(express.static("public"));
app.use(responseJson);

// Router
app.use("/api", rootRouter);

// Xử lý lỗi 404
app.use(notFoundHandler);

app.listen(3000, function () {
  console.log("web server listening on port 3000");
});
