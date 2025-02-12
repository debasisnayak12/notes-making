const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    userID:{type:String,required:true},
    user:{type:String,required:true},
    creationDateTime: {
        type: Date,
        default: new Date().getTime(),
      },
},{
    versionKey:false
})

const NoteModel = mongoose.model("note",noteSchema)

module.exports = {
    NoteModel
}