// Importando módulos (dependências)
const { PORT } = require("dotenv").config().parsed;
const app = require("express")();
const express = require("express")
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());


//IMPLEMENTAÇÃO ALTERNATIVA
// const bodyParser = require("body-parser");
// app.use(bodyParser.json())

// Mapeamento das rotas

    //Maneira1 - injetando contexto - apenas como exemplo
    // require("../routes/users")(app);

    //Maneira2
    const customers = require ("../routes/customers")
    app.use("/customers", customers)

// console.log(require ("../routes/customers"))

// Habilitando a aplicação
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));