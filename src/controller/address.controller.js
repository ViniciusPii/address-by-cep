const express = require("express")

const addressController = () => {

    const router = express.Router()

    router.get("/address/cep/:cep", (req, res) => {

        res.send("correto")

    })

    return router

}

module.exports = addressController()