
const mongoose = require("mongoose");

const clientesModel = new mongoose.Schema(
    {
        name: { type: String },
        position: { type: String },
        office: { type: String },
        salary: { type: String },


    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ModelClientes = mongoose.model("clientes", clientesModel);

module.exports = ModelClientes;
