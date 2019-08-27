const { BaseRouter } = require("emvicify/routers");

class HomeRouter extends BaseRouter {
    register(app) {
        // app.get("/", (req, res) => this.controllers.home.getList({ req, res }));
    }
}

module.exports = HomeRouter;
