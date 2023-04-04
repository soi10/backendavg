const login_idm = require("../controllers/login_controler")
const routes_login_idm = require("express").Router()

routes_login_idm.post('/idm',login_idm.login)

module.exports = routes_login_idm