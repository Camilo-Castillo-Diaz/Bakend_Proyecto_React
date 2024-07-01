const ModelUser = require("../models/model")
const usuarioCtrl = {}


usuarioCtrl.createUser = async (req, res) => {
    const body = req.body
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
    console.log("Creacion exiosa")

}


// consultar 
usuarioCtrl.getUsers = async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
    console.log("Consulta exitosa")


}
// consultar por id 
usuarioCtrl.getUniqueUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({ _id: id })
    res.json(respuesta)
    console.log("Consulta por id exitosa")


}
// actualizar 
usuarioCtrl.edit = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const respuesta = await ModelUser.findByIdAndUpdate({ _id: id }, body)
    res.json(respuesta)
    console.log("Actualizacion exitosa")


}
// eliminar 
usuarioCtrl.deleteUsers = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({ _id: id });
    res.json(respuesta)
    console.log("Eliminacion exitosa");

};

module.exports = usuarioCtrl;