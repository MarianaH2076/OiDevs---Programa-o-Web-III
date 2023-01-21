const connDb = require("../infra/connection")
const Customer = require("../dao/customerDao");

exports.createOne = (req, res) => {
    Customer.create(req.body, (err) => {
        if (!err) {
            res.send({});
        } else {
            res.send({ err });
        }
    });
};

exports.getAll = (req, res) => {
    Customer.findAll((err, data) => res.send(data));

},
    
exports.getOne = (req, res) => {
    Customer.findOne(req.params.id, (err, data) => {
        if (data) {
        res.status(200).send(data);
        } else {
        res.status(404).send({err: "Customer not found"})
        }
});

},
    
exports.changeOne = (req, res) => {
    Customer.updatePartial(req.params.id, req.body, (err) => {
        if(err) {
            res.status(400).send( {msg: err });
        } else {
            res.status(204).end();
        }
    });
    
};
    
exports.removeOne = (req, res) => {
    Customer.delete(req.params.id, (err) => {
        if(!err) res.status(204).end();
     })
}


// //é responsabilidade dessa camada ter as regras de negócio

// module.exports = {
//     createOne: (req, res) => res.send('POST CUSTOMERS'),
    
//     getAll: (req, res) => res.send("GET ALL CUSTOMERS"),
    
//     getOne: (req, res) => res.send("GET ONE CUSTOMER"),
    
//     changeOne: (req, res) => res.send("PUT CUSTOMERS"),
    
//     removeOne: (req, res) => res.send("DELETE CUSTOMERS")
// }