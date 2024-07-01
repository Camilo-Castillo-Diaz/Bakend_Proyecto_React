const express = require("express")
const router = express.Router()
const clientesCtrl = require("../controllers/clientes.controller")

router.get("/",  clientesCtrl.getClientes);
router.post("/",  clientesCtrl.createClientes)
router.get("/:id",  clientesCtrl.getUniqueClientes)
router.put("/:id",  clientesCtrl.editClientes)
router.delete("/:id",  clientesCtrl.deleteClientes)

module.exports = router;


