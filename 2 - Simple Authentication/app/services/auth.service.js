const { BaseService } = require("emvicify/services");

class AuthService extends BaseService {
    constructor({ services }) {
        super({ services });

        this.tokens = {};
    }

    login(username, password) {
        const user = this.services.users.getForLogin(username, password);
        if (!user) {
            throw new Error("The username or password is wrong");
        }

        const token = "D" + (new Date().getTime());

        this.tokens[user.username] = token;

        return token;
    }

    logout(username) {
        delete this.tokens[username];
    }

    validateRequest({ user, password }) {
        return new Promise((resolve, reject) => {
            let token = password;
            let username = user;

            if (this.tokens[username] && this.tokens[username] === token) {
                resolve(this.services.users.get(username));
            }
            else {
                reject("Unauthorized");
            }
        });
    }
}

module.exports = AuthService;
