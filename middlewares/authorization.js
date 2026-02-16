const jwt = require("jsonwebtoken")


async function authenticateUser (req,res,next){
    try{
        // extract token value form cookies
        const token = req.cookies.token;

        // if there is no token then return
        if(!token){return res.status(401).json({message:"Unauthorized access"}) };

        // VERIFY THE TOKEN 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // PUT THE USER DATA IN req.user
        req.user = decoded;
        // perform the next process
        next();



    }
    catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized access"})
    }
}

module.exports = {authenticateUser}