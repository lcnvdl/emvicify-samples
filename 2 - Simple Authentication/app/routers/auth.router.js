const { BaseRouter } = require("emvicify/routers");

class AuthRouter extends BaseRouter {
    get auth() {
        return this.middlewares.auth.generate();
    }

    register(app) {
        app.post("/auth/login", (req, res) => this.controllers.auth.login({ req, res }));
        app.post("/auth/logout", this.auth, (req, res) => this.controllers.auth.logout({ req, res }));
    }
}

module.exports = AuthRouter;
