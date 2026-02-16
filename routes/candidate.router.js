const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authorization")
const candidate = require("../controllers/candidate.controller")

// this route is to register candidate
router.post("/",authenticateUser.authenticateUser,candidate.createCandidate);

// route for updating the data of candidate
router.put("/:candidateId",authenticateUser.authenticateUser, candidate.update);

// route for deleting the candidate
router.delete("/:candidateId",authenticateUser.authenticateUser, candidate.deleteuser)

// route for getting all the candidate
router.get("/",candidate.getallCandidates)
















module.exports = router;