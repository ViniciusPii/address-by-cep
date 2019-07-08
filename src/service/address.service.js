const addressClient = require("../client/address.client")

const addressService = () => {

    const addressByCep = async (cep) => {

        const body = await addressClient.addressByCep(cep)

        const street = body.logradouro
        const neighborhood = body.bairro
        const city = body.localidade
        const state = body.uf

        return {
            street,
            neighborhood,
            city,
            state
        }

    }

    return {
        addressByCep
    }

}

module.exports = addressService()