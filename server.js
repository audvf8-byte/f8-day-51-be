const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://[your-username].github.io"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "Hello" });
});

app.listen(3000, function () {
  console.log("web server listening on port 3000");
});
