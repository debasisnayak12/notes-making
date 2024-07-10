const express = require("express")
const {NoteModel} = require("../models/noteModel")
const {auth} = require("../middlewares/auth.middleware")

const noteRouter = express.Router()

//CREATE the Notes
noteRouter.post("/create", auth,async(req,res)=>{
    try {
        const note=new NoteModel(req.body)
        await note.save()
        res.send({"msg":"A new note has been added"})
    } catch (error) {
        res.send({"error":error})
    }
})
// READ the Notes
noteRouter.get("/", auth,async(req,res)=>{
    try {
        const notes = await NoteModel.find({userID:req.body.userID})
        res.send(notes)
    } catch (error) {
        res.send({"error":error})
    }
})

// UPDATE the Notes
noteRouter.patch("/update/:noteID",auth, async(req,res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id:noteID})
    try {
         if(req.body.userID !== note.userID){
             res.send({"msg":"You are not Authorised!"})
            }else{
                await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
                res.send({"msg":`The note with id ${noteID} has been updated`})
            }
    } catch (error) {
        res.send({"error":error})
    }
})

// DELETE the Notes
noteRouter.delete("/delete/:noteID", auth,async(req,res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id:noteID})
    try {
         if(req.body.userID !== note.userID){
             res.send({"msg":"You are not Authorised!"})
            }else{
                await NoteModel.findByIdAndDelete({_id:noteID})
                res.send({"msg":`The note with id ${noteID} has been deleted`})
            }
    } catch (error) {
        res.send({"error":error})
    }
})


module.exports = {
    noteRouter
}