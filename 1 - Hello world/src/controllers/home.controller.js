const { BaseController } = require("emvicify/controllers");

class HomeController extends BaseController {

    getHome({ res }) {
        res.send("Hello world!");
    }

}

module.exports = HomeController;