const express = require("express");
const cors = require("cors")
const authRoutes = require("./routes/authRoutes")

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend origin
}))

app.use(express.json());



app.use("/api/auth", authRoutes);

module.exports = app;
