require("dotenv").config();

const connectDB = require("./config/db");

const express = require("express");

const cors  = require("cors");

const interviewRoutes =
require("./routes/interviewRoutes");


const authRoutes = require("./routes/authRoutes");
connectDB();
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/interview", interviewRoutes);

app.get("/", (req,res) => {
    res.json({message:"Api Running"});
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});