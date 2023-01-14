/*
// Mapeamento das rotas

  

  

  

  */

module.exports = (app) => {
    // console.log("INTERNAL", app)

    // Recuperar um usuário - HTTP GET
  app.get(
    "/", 
    (req, res, next) => res.send("HTTP GET - Usuário")
  );

    // Criar um usuário - HTTP POST
    app.post("/", (req, res) => res.send("HTTP POST - Usuário"));   

    // Atualizar um  usuário: HTTP PUT
    app.put("/", (req, res) => res.send("HTTP PUT - Usuário"));

    // Excluir um usuário - HTTP DELETE
    app.delete("/", (req, res) => res.send("HTTP DELETE - Usuário"));
}