const express = require('express');
const helmet = require('helmet');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const UsesrRouter = require('../users/userRouter')
const knexConnection = require('../data/db-config')

const server = express();

const sessionOptions = {
    name: 'auth-users',
    secret: process.env.COOKIE_SECRET || 'keep it funny', // for encryption
    cookie: {
        secure: false, // HTTP or HTTPs
        maxAge: 1000 * 60, //how long is the session good for ms
        httpOnly: true, //client JS has no access to the cookie
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: knexConnection,
        createtable: true,
        clearInterval: 1000 * 60 * 60 // how long before we clear out expired sessions
    })
}

server.use(helmet());
server.use(express.json());

server.use(session(sessionOptions))
server.use('/api', UsesrRouter); 

server.get('/', (req, res) => {
    res.json({api: 'up', session: req.session})
})

module.exports = server;