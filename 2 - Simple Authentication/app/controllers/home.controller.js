const { BaseController } = require("emvicify/controllers");

class HomeController extends BaseController {
    constructor({ services }) {
        super({ services });
    }

    register({ req, res }) {
        const { name, username, password } = req.body;

        this.services.users.register(name, username, password);

        res.json(true);
    }

    getLoggedUserName({ req, res }) {
        res.json(req.locals.auth.name);
    }
}

module.exports = HomeController;
