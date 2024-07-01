const mongoose = require("mongoose");
require("dotenv").config()
const dbconect = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("Conexión exitosa a la base de datos"))
        .catch((err) => console.log(err.message));
};

module.exports = dbconect;
