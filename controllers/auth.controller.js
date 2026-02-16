const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {body, validationResult} = require("express-validator");



// to creating the user
async function createUser (req,res){

    // validate whether the value provided are valid or not
    body("adharCardNumber").isLength({min:12,max:12}).withMessage("Adhar card number must be 12 digits Only");
    body("email").isEmail().withMessage("please enter a valid email");


    // return if input values are not as per required
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            errors:error.array(),
            message:"Invalid data provided"
        })
    }

    const {name,age,email,mobileNumber,address,adharCardNumber,password,role="voter",isVoted=false} = req.body;

    try{

        // check whether is there any already existing user or not in database
        const adminUser = await userModel.findOne({role:"admin"});
        if(role === "admin" && adminUser){
            return res.status(400).json({message:"Admin already exists"});

        }


        const userAlreadyExists = await userModel.findOne({
            $or:[
                {email},
                {adharCardNumber}
            ]
        })

        //if exist then return
        if(userAlreadyExists){
            return res.status(400).json({message:"User already exist"})
        }

        // hashing the password
        const hash = await bcrypt.hash(password,10);


        // creation of the new user
        const user = await userModel.create({
            name,
            age,
            email,
            mobileNumber,
            address,
            adharCardNumber,  
            role,
            isVoted,
            password:hash
        })


        // create a token using jwt and the unique field here is id
        const token = jwt.sign({
            id:user._id,
            adharCardNumber:user.adharCardNumber,
        },process.env.JWT_SECRET_KEY)


        // creating and sending the token
        res.cookie("token",token);

        res.status(201).json({
            message:"User created Successfully",
            user
        })

}
    catch(err){
        console.log(err)
    }
}

// to login the user

async function loginUser(req,res){

    // extract the values provided by the user
    const {email,adharCardNumber,password} = req.body;


    // check whether there is any user with the specific data or not
    const user = await userModel.findOne({
        $or:[
            {email},
            {adharCardNumber}
        ]
    })

    // if not then return

    if(!user){
        return res.status(400).json({message:"Invalid credentials"})
    }


    // check password provided by user using bcrypt
    const isPasswordcorrect = await bcrypt.compare(password,user.password);

    if(!isPasswordcorrect){
        return res.status(400).json({message:"Invalid credentials"})
    }


    // again signing the token and sending it
    const token = jwt.sign({
        id:user._id,
        adharCardNumber:user.adharCardNumber,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(200).json({
        message:"Login successfull",
        user
    })



}

// to get the profile
async function getProfile(req,res){
    const user = await userModel.findOne({_id:req.user.id})
    res.status(200).json({
        message:"User fetched successfully",
        user
    })

}


// changing the password
async function changePassword(req,res){
    // extract old and new password form the user
    const {oldPassword,newPassword} = req.body;


    // if any one of them is not provided the return error
    if (!oldPassword || !newPassword){
        return res.status(400).json({message:"Please provide both old and new password"})
    }
 
    // finding the user
    const user = await userModel.findOne({
        _id:req.user.id
    });


    // hashing the user
    const hash = await bcrypt.hash(newPassword,10);

    // checking the password whether it is correct or not
    const isPasswordCorrect = await bcrypt.compare(oldPassword,user.password);


    // if the passwor dis wrong then return
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Old password is wrong"});
    }


    // update the user with the new password in the database
    const updateduser = await userModel.findOneAndUpdate(
       {_id:req.user.id},
       { password:hash},
       { new:true}
    )

    res.status(200).json({
        message:"password updated successfully",
        updateduser
    })
}




module.exports = {createUser,loginUser,getProfile,changePassword}