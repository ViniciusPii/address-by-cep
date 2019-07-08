const superagent = require("superagent")

const BASE_API = "viacep.com.br/ws/"

const addressClient = () => {

    const addressByCep = async (cep) => {

        const addressresponse = await superagent.get(`${BASE_API}${cep}/json/`)

        const body = addressresponse.body

        return body

    }

    return {
        addressByCep
    }

}

module.exports = addressClient()