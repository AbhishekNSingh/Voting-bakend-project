const candidateModel = require("../models/candidate.model");

async function checkAdmin(userId) {
    // this is to check whether the user is admin or not by checking their role
    try {
        const user = await user.findById(userId);
        if (user.role === "admin") {
            return true;
        }
    }
    catch (err) {
        console.log(err);
        return false;
    }
}


async function createCandidate(req, res) {
    
    try {
        if (!(checkAdmin(req.user))) {
            return res.status(403).json({ message: "User does not have permission" })
        }
        // extracting the information
        const { name, party, age } = req.body;

        // creating a new candidate in the database
        const candidate = await candidateModel.create({
            name,
            party,
            age
        })

        res.status(201).json({
            message: "Candidate create dsuccessfully",
            candidate
        })
    }
    catch (err) {
        console.log(err);
    }
}


async function update(req, res) {
    // check whether user is admin or not
    if (!(checkAdmin(req.user))) {
        return res.status(403).json({ message: 'user does not have admin role' });
    }


    // extracting the candidate id and candidate data
    const candidateId = req.params.candidateId;
    const candidatedata = req.body;
    // updating the candidate data
    const updatedCandidate = await candidateModel.findByIdAndUpdate(
        candidateId,
        candidatedata,
        {
            new: true,
            runValidators: true
        }
    )
    // if no existing user with the same data then return
    if (!updatedCandidate) {
        return res.status(404).json({ error: 'Candidate not found' });
    }

    console.log('candidate data updated');
    res.status(200).json(updatedCandidate);

}



async function deleteuser(req, res) {
    try {
        // check whether user is admin or not
        if (!(checkAdmin(req.user))) {
            return res.status(403).json({ message: 'user does not have admin role' });
        }
        // extracting the candidate id which need to be deleetd
        const candidateId = req.params.candidateId;

        // find id and delete the candiddate
        const deletedUser = await candidateModel.findByIdAndDelete(candidateId);
        
        // if there is no candidate with the candidate id the return

        if (!deletedUser) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        res.status(200).json(deletedUser)
    }
    catch (err) {
        console.log(err)
    }



}

async function getallCandidates(req,res){
    try{
        // search the candidates with the following data
        const candidates = await candidateModel.find({},"name party _id");

        res.status(200).json(candidates);
    }
    catch(err){
        console.log(err)
    }
}

module.exports = { createCandidate, update,deleteuser,getallCandidates,}