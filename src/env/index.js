const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: {
        name: process.env.DB_NAME || 'db',
        user: process.env.DB_USER || 'test',
        pass: process.env.DB_PASS || '123',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5555'
    },
    app: {
        port: process.env.APP_PORT || '5555'
    },
    mongo: {
        port: process.env.MONGO_PORT || '27017'
    },
    secretKey: process.env.JWT_SECRET_KEY || 'MEGA_SECRET_KEY'
};