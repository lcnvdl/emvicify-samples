const { BasicServiceAuthenticationMiddleware } = require("emvicify/middlewares");

class AuthMiddleware extends BasicServiceAuthenticationMiddleware {
    constructor({ services }) {
        super({ services });
    }

    get authenticationService() {
        return super.authenticationService;
    }

    processForService(authString) {
        return super.processForService(authString);
    }

    generate() {
        return super.generate();
    }
}

module.exports = AuthMiddleware;