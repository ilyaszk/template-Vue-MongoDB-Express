const mongoose = require('mongoose');

async function connectDB() {
    const url = "mongodb://127.0.0.1/VueNodeMongoDb";

    try {
        await mongoose.connect(url);
        console.log(`Database connected: ${url}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

    const dbConnection = mongoose.connection;

    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });

    // Returning the connection object for further usage
    return dbConnection;
}

module.exports = connectDB;
