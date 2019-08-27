const { BaseService } = require("emvicify/services");

class UsersService extends BaseService {
    constructor({ services }) {
        super({ services });

        this.users = [];
    }

    get(username) {
        return this.users.find(m => m.username === username);
    }

    getForLogin(username, password) {
        return this.users.find(m => m.username === username && m.password === password);
    }

    register(name, username, password) {
        if (this.users.some(m => m.username === username)) {
            throw new Error("The user already exists");
        }

        this.users.push({ username, password, name });
    }
}

module.exports = UsersService;
