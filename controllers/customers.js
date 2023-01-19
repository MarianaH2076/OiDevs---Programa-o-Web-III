const connDb = require("../infra/connection")

exports.createOne = (req, res) => {
    const { id, name, email, birthday, cpf, typeAccount } = req.body
    const sql = `INSERT INTO customers
                (id, name, email, birthday, cpf, typeAccount)
                VALUES
                ('${id}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}')`;

    connDb.run(sql, (err) => {
        if (!err) {
            res.send({ id, name, email, birthday, cpf, typeAccount });
        } else {
            res.send({ err });
        }
    });
};

exports.getAll = (req, res) => {
    const sql = "SELECT * FROM customers";
    connDb.all(sql, (err, data) => res.send(data))
},
    
exports.getOne = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM customers WHERE id = '${id}'`;
    connDb.get(sql, (err, data) => {
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({err: "Customer not found"})
        }
    });
},
    
exports.changeOne = (req, res) => res.send("PUT CUSTOMERS"),
    
exports.removeOne = (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM customers WHERE id = '${id}'`
    connDb.run(sql, function(err) {
        if(!err) res.status(204).end();
    });
    
    res.send("DELETE CUSTOMERS")
}


// //é responsabilidade dessa camada ter as regras de negócio

// module.exports = {
//     createOne: (req, res) => res.send('POST CUSTOMERS'),
    
//     getAll: (req, res) => res.send("GET ALL CUSTOMERS"),
    
//     getOne: (req, res) => res.send("GET ONE CUSTOMER"),
    
//     changeOne: (req, res) => res.send("PUT CUSTOMERS"),
    
//     removeOne: (req, res) => res.send("DELETE CUSTOMERS")
// }