const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5000;
var url = "mongodb://localhost:27017/eji"


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("connecting error", err);
});

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const StudentRouter = require("./routes/student");
const CategoryRouter = require("./routes/Category");

app.use("/student", StudentRouter);
app.use("/category",CategoryRouter);

app.get("/", (req, res) => {
  res.send("Welcome to easy job intern server");
});

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
