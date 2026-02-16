const express = require("express");
require('dotenv').config();
const connectDB = require('./db');
const cookieParser = require("cookie-parser")
connectDB();
const userRoutes = require("./routes/user.routes");
const candidateRoute = require("./routes/candidate.router")
const voteroutes = require("./routes/votes.router")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// routes for all the user related tasks
app.use("/user",userRoutes);
// routes for all the candidate related tasks
app.use("/candidate",candidateRoute);
// routes for all the votes related tasks
app.use("/vote",voteroutes);


app.listen(3000,() => {
    console.log("Server is live on the port provided");
})