const cors = require('cors');
const Modulo = require('./app/model/modulo');
const User = require('./app/model/user');
const Perfil = require('./app/model/perfil');
const UserRoutes = require('./app/routes/user.routes');
const database = require('./app/controllers/db');

const fastify = require('fastify')({ logger: true });

function addRoutes(){
    UserRoutes.routes.forEach(route => fastify.route(route));
}

addRoutes()

// Declare a route
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()