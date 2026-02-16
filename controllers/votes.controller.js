const candidateModel = require("../models/candidate.model");
const userModel = require("../models/user.model")





async function vote(req, res) {
    // taking the candidate id from the url
    const candidateId = req.params.candidateId;
    const userId = req.user.id;

    try {
        // find the candidate by id
        const candidate = await candidateModel.findById(candidateId);

        // if there is no candidate with such id then return error
        if(!candidate){
            return res.status(404).json({message:"Candidate not found"})
        }

        // find whether the user is valid or not
        const user = await userModel.findById(userId);
        if(!user){
            return res.status(404).json({message:"user does not exist"})
        }

        // check whether user is admin and if user is admin then dont allow to vote
        if(user.role === "admin"){
            return res.status(403).json({message:"admins are not allowed to vote"})
        }

        // if user has already voted then return
        if(user.isVoted){
            return res.status(400).json({message:"You have already voted earlier"})
        }

        // if the user has passed all the above test then push the user id to candidate data and increase the vote count
        candidate.votes.push({user:userId});
        candidate.voteCount++
        await candidate.save();

        // change the isVoted value to true
        user.isVoted = true;
        await user.save();


        return res.status(200).json({message:"Vote recorded sucessfully"})

    }
    catch (err) {
        console.log(err)
    }
}

async function count(req,res){
    try{
        // find the candidates and sort by the vote count
        const candidate = await candidateModel.find().sort({voteCount: "desc"});
        
        // map the users 
        const votes = candidate.map((data) => {
            return {
                party:data.party,
                count: data.voteCount
            }
        })
        return res.status(200).json(votes)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {vote, count}