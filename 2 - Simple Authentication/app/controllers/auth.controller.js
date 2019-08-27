const { BaseController } = require("emvicify/controllers");

class AuthController extends BaseController {
    constructor({ services }) {
        super({ services });
    }

    login({ req, res }) {
        const { username, password } = req.body;

        const token = this.services.auth.login(username, password);

        res.json({ token });
    }

    logout({ req, res }) {
        const { username } = req.locals.auth;
        this.services.auth.logout(username);
        res.json(true);
    }
}

module.exports = AuthController;
