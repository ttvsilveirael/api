const User = require("../model/user");

class UserController {
    static getUsers() {
        return User.getUser(null);
    }

    static getUser(id) {
        return User.getUser(id);
    }

    static updateUser(user) {
        return User.updateUser(user);
    }

    static deleteUser(id) {
        return User.deleteUser(id);
    }

    static insertUser(user){
        return User.insertUser(user);
    }
}

module.exports = UserController;