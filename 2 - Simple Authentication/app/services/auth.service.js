const { BaseService } = require("emvicify/services");

class AuthService extends BaseService {
    constructor({ services }) {
        super({ services });
    }
}

module.exports = AuthService;
