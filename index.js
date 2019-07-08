const express = require("express")
const addressController = require("./src/controller/address.controller")

const app = express()

const port = 5000

app.use(addressController)

app.listen(port, () => {

    console.log(`server started on port ${port}`)

})