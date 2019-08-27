const { BaseRouter } = require("emvicify/routers");

class HomeRouter extends BaseRouter {
    get auth() {
        return this.middlewares.auth.generate();
    }

    register(app) {
        app.get("/", (_, res) => res.json(true));
        app.get("/name", this.auth, (req, res) => this.controllers.home.getLoggedUserName({ req, res }));
        app.post("/register", (req, res) => this.controllers.home.register({ req, res }));
    }
}

module.exports = HomeRouter;
