// Importando módulos (dependências)
const { PORT } = require("dotenv").config().parsed;

const app = require("express")();

// Mapeamento das rotas

    //Maneira1 - injetando contexto - apenas como exemplo
    // require("../routes/users")(app);

    //Maneira2
    const customers = require ("../routes/customers")
    app.use("/customers", customers)

// console.log(require ("../routes/customers"))

// Habilitando a aplicação
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));