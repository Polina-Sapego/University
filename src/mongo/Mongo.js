const mongoose = require('mongoose');
const MongoConfig = require('../env/index');

async function connect() {
    await mongoose.connect(
        `mongodb://127.0.0.1:${MongoConfig.Port}/${MongoConfig.Collection}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = connect();