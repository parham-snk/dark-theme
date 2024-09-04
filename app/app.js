const express = require("express")
const path = require('path');
const ejs = require('ejs');


const ap = express()

module.export = new class app {
    constructor() {
        this.configServer()
        this.setConfigs()
        this.setRoute()
    }
    configServer() {
        ap.listen(8083, err => err ? console.log(err) : console.log("Server : Online"))
    }
    setConfigs() {
        ap.use('/public', express.static(path.join(__dirname, "public")))
        ap.set("views", path.join(__dirname, "resources"))
        ap.set("view engine", "ejs")
    }
    setRoute() {
        ap.use(require("./router/router"))
    }
}