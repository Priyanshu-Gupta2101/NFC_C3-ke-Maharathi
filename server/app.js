const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/connectDB");
require("dotenv").config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running at ${port}..`);
    });
  } catch (error) {
    console.log(error);
  }
})();
