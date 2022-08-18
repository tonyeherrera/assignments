const express = require("express")
const bountyRouter = express.Router()
// const {v4: uuidv4} = require("uuid")
const Bounty = require('../models/bounty.js')

// const bounties = [
//     {
//         firstName:"Bob",
//         lastName:"Square Pants",
//         living: false,
//         bountyAmount:10,
//         type:"Sith",
//         _id:uuidv4()
//     }
// ]


bountyRouter.get("/",(req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            // res.status(500)
            return next(err)
        }
        return res.send(bounties)
    })
})

// bountyRouter.post("/",(req, res) => {
//         const newBounty = req.body
//         newBounty._id = uuidv4()
//         bounties.push(newBounty)
//         res.status(201).send(`Successfully submitted new bounty for: ${newBounty.firstName} ${newBounty.lastName}`)
//     })
// bountyRouter.delete("/:bountyId", (req, res) => {
//         const bountyId = req.params.bountyId
//         const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//         bounties.splice(bountyIndex,1)
//         res.send("The bounty was successfully removed")
//     })
// bountyRouter.put("/:bountyId", (req,res) => {
//         const bountyId = req.params.bountyId
//         const update = req.body
//         const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//         const updatedBounty = Object.assign(bounties[bountyIndex], update)
//         res.status(201).send(updatedBounty)
//     })



module.exports = bountyRouter