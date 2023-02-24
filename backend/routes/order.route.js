const express = require("express")
const { OrderModel } = require("../model/order.model")
const jwt = require("jsonwebtoken")

const orderrouter = express.Router()



orderrouter.get("/", (req, res) => {

    if (req.body.email == "admin@gmail.com") {
        jwt.verify(token, 'shhhhh', async function (err, decoded) {
            if (decoded) {
                let orders = await OrderModel.find()
                res.send(orders)
            }
            else {
                res.send({ "msg": "Wrong Credentials" })
            }
        })
    }
    else {
        res.send({ "msg": "Wrong Credentials" })
    }
})

orderrouter.post("/create", (req, res) => {

    if (req.body.email == "admin@gmail.com") {
        jwt.verify(token, 'shhhhh', async function (err, decoded) {
            if (decoded) {
                let orders = await OrderModel.find()
                res.send(orders)
            }
            else {
                res.send({ "msg": "Wrong Credentials" })
            }
        })
    }
    else {
        res.send({ "msg": "Wrong Credentials" })
    }
})


module.exports = {
    orderrouter
}