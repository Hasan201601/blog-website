const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

dotenv.config();

connectDB();
app.use(express.json());

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});
