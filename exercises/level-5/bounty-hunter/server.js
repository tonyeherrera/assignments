const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, ()=> console.log("Connected to DB"))

app.use("/bounty", require("./routes/bountyRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("Server is running on Port 8000")
})