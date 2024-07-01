const express = require("express")
const router = express.Router()
const usuarioCtrl = require("../controllers/usuario.controller")

router.get("/", usuarioCtrl.getUsers);
router.post("/", usuarioCtrl.createUser)
router.get("/:id", usuarioCtrl.getUniqueUser)
router.put("/:id", usuarioCtrl.edit)
router.delete("/:id", usuarioCtrl.deleteUsers)

module.exports = router;


