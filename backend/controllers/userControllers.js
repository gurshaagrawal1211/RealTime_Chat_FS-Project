const asyncHandler=require("express-async-handler")
const User=require("../models/userModel")
const generateToken=require("../config/generateToken")
const registerUser = asyncHandler(async(req,res) => {
    const { name,email,password,pic }=req.body;

    if(!name || !email || !password)
    {
        resizeBy.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({ email });

    if(userExists)
    {
        resizeBy.status(400);
        throw new Error("User already exists");
    }

    const user=User.create({
        name,
        email,
        password,
        pic,
    });

    if(user)
    {
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token : generateToken(user._id),
        });
    }
    else
    {
        res.status(400);
        res.status("Failed to create the user");
    }
});

module.exports={ registerUser }