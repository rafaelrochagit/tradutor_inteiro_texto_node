const routes = require("express").Router()

const TradutorController = require("./app/controllers/TradutorController")

routes.get('/:numero', TradutorController.traduz)

routes.get('*', (req,res) => {
    const jsonErro = {"error": "Rota Inexistente"}
    res.status(404).json(jsonErro)
})


module.exports = routes