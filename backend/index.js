const express = require("express")
const { connection } = require("./db")
const {userRouter} = require("./routes/userRoutes")
const {noteRouter} = require("./routes/noteRoutes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use("/users",userRouter)
app.use("/notes",noteRouter)


app.listen(8080, async() => {
    try{
        await connection
        console.log("Connected to the DB")
        console.log("Server is Running on port 8080")
    }catch(error){
        console.log("DB Connection Error:", error); 
    }
})