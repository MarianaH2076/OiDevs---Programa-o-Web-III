const express = require("express");
const router = express.Router();

// conectando com o banco de dados
const path = require("path")

const { PATH_DB } = require("dotenv").config().parsed;
const { Database } = require("sqlite3")
const db = new Database(path.resolve() + PATH_DB);


// Criar um cliente (POST)
router.post('/', (req, res) => res.send('POST CUSTOMERS'))

// Recuperar todos os clientes (GET)
router.get("/", (req, res) => {
    const sql = "SELECT * FROM customers";
    db.get(sql, function(err, data) {
        console.log("RODOU", err, data)
        res.send(data)
    })
    
})

// Recuperar um cliente específico (GET by id)

// Atualizar um cliente (PUT)
router.put("/", (req, res) => res.send("PUT CUSTOMERS"))

// Remover um cliente (DELETE)
router.delete("/", (req, res) => res.send("DELETE CUSTOMERS"))


module.exports = router;