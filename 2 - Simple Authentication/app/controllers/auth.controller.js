const { BaseController } = require("emvicify/controllers");

class AuthController extends BaseController {
    constructor({ services }) {
        super({ services });
    }
}

module.exports = AuthController;
