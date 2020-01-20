const routes = require("express").Router()

const TradutorController = require("./app/controllers/TradutorController")

routes.get('/:numero', TradutorController.traduz)

module.exports = routes