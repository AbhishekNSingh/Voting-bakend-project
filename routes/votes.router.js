const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authorization")
const votecount = require("../controllers/votes.controller")


// routes for gettint all the candidate
router.get("/count",votecount.count)

// route for voting the candidate
router.get("/:candidateId",auth.authenticateUser,votecount.vote);






module.exports = router;
