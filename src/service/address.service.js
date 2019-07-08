const addressClient = require("../client/address.client")

const addressService = () => {

    const addressByCep = (cep) => {

        return addressClient.addressByCep(cep)

    }

    return {
        addressByCep
    }

}

module.exports = addressService()