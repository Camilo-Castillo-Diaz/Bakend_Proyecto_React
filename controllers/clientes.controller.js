const ModelClientes = require("../models/clientes")
const clientesCtrl = {}


clientesCtrl.createClientes = async (req, res) => {
    const body = req.body
    const respuesta = await ModelClientes.create(body)
    res.send(respuesta)
    console.log("Creacion exiosa")

}


// consultar 
clientesCtrl.getClientes = async (req, res) => {
    const respuesta = await ModelClientes.find({})
    res.send(respuesta)
    console.log("Consulta exitosa")


}
// consultar por id 
clientesCtrl.getUniqueClientes = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelClientes.findById({ _id: id })
    res.json(respuesta)
    console.log("Consulta por id exitosa")


}
// actualizar 
clientesCtrl.editClientes = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const respuesta = await ModelClientes.findByIdAndUpdate({ _id: id }, body)
    res.json(respuesta)
    console.log("Actualizacion exitosa")


}
// eliminar 
clientesCtrl.deleteClientes = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelClientes.deleteOne({ _id: id });
    res.json(respuesta)
    console.log("Eliminacion exitosa");

};

module.exports = clientesCtrl;