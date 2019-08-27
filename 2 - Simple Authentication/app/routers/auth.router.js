const { BaseRouter } = require("emvicify/routers");

class AuthRouter extends BaseRouter {
    register(app) {
        // app.get("/", (req, res) => this.controllers.auth.getList({ req, res }));
    }
}

module.exports = AuthRouter;
