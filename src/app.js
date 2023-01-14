// Importando módulos (dependências)
const app = require("express")();

// Mapeamento das rotas
require("../routes/users")(app);

// Habilitando a aplicação
app.listen(8080, () => console.log("Server is running on port 8080"));