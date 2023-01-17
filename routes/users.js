/*
// Mapeamento das rotas

  

  

  

  */

module.exports = (ctx) => {
    // console.log("INTERNAL", app)

    // Recuperar um usuário - HTTP GET
    ctx.get(
    "/users", 
    (req, res, next) => res.send("HTTP GET - Usuário")
  );

    // Criar um usuário - HTTP POST
    ctx.post("/users", (req, res) => res.send("HTTP POST - Usuário"));   

    // Atualizar um  usuário: HTTP PUT
    ctx.put("/users", (req, res) => res.send("HTTP PUT - Usuário"));

    // Excluir um usuário - HTTP DELETE
    ctx.delete("/users", (req, res) => res.send("HTTP DELETE - Usuário"));
}