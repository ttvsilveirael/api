const UserController = require("../controllers/user.controller");
const User = require("../model/user");

class UserRoutes {
    static routes = [{
        method: 'GET',
        url: '/user',
        handler: () => {
            return UserController.getUsers();
        },
    }, {
        method: 'POST',
        url: '/user',
        handler: async (request, reply) => {
            let jsonUser = request.body;
            let user = new User(jsonUser['ID'], jsonUser['USERNAME'], jsonUser['PASSWORD'], jsonUser['ATIVO']);
            return UserController.updateUser(user);
        }
    },
    {
        method: 'PUT',
        url: '/user',
        handler: async (request, reply) => {
            let jsonUser = request.body;
            let user = new User(null, jsonUser['USERNAME'], jsonUser['PASSWORD'], true);
            console.log(user)
            return UserController.insertUser(user);
        }
    },
    {
        method: 'DELETE',
        url: '/user/:id',
        handler: async (request, reply) => {
            let id = request.params['id'] ;
            return UserController.deleteUser(id)
        }
    },
    ]
}

module.exports = UserRoutes;