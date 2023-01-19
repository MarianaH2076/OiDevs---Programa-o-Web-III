const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers")

// Criar um cliente (POST)
router.post('/', customersCtrl.createOne)

// Recuperar todos os clientes (GET)
router.get("/", customersCtrl.getAll)

// Recuperar um cliente específico (GET by id)
router.get("/:id", customersCtrl.getOne)

// Atualizar um cliente (PUT)
router.put("/:id", customersCtrl.changeOne)

// Remover um cliente (DELETE)
router.delete("/:id", customersCtrl.removeOne)


module.exports = router;