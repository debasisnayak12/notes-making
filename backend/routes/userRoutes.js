const express = require("express")
const { UserModel} = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

//Registration route
userRouter.post("/register",async(req,res)=>{
    const {email,username,pass} = req.body
    try {
        bcrypt.hash(pass, 8, async(err, hash) => {
            if(err){
                res.send({"err":err})
            }else{
                const user = new UserModel({username,email,pass:hash})
                await user.save()
                res.status(200).send({"msg":"New user has been Registered"})
            }
        });
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

// Login route
userRouter.post("/login", async(req,res)=>{
    const {email,pass} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(pass, user.pass, (err, result) => {
                if(result){
                    const token = jwt.sign({userID:user._id, user:user.username},"accio")
                    res.send({"msg":"Logged In!","token":token})
                }else{
                    res.send({"err":err})
                }
            })
        }else{
            res.send({"msg":"User doesn't exist!"})
        }
    } catch (error) {
        res.status(400).send({"err":error})
    }
})

module.exports = {
    userRouter
}