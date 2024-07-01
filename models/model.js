const mongoose = require("mongoose");

const usuarios = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        contraseña: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ModelUser = mongoose.model("usuarios", usuarios);

module.exports = ModelUser;
