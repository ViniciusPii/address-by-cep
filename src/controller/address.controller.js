const express = require("express")
const addressService = require("../service/address.service")

const addressController = () => {

    const router = express.Router()

    router.get("/address/cep/:cep", async (req, res) => {

        const cep = req.params.cep
        const result = await addressService.addressByCep(cep)
        res.send(result)

    })

    return router

}

module.exports = addressController()