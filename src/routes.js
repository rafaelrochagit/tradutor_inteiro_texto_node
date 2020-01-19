const routes = require("express").Router()

routes.get('/', (req,res) => {
    res.send('Oszzi sssssaaas')
})

module.exports = routes