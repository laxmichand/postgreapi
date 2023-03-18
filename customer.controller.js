const db = require('./db.config');
const Customer = db.Customers;

console.log("db is", db.Customers);

function createCustomer(req, res) {
    if (!req.body.email || !req.body.name) {
        res.sendStatus(400)
            .send({
                message: 'Bad Data'
            })
    };
    const customerData = req.body;
    Customer.create(customerData)
        .then(customer => {
            res.send(customer).sendStatus(200);
        })
        .catch(err => {
            res.status(500).send({
                message: err
            })
        })

};

function findAllCustomers(res) {
    Customer.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.sendStatus(400).send({
                message: err
            })
        })
};

function findByEmailCustomer(req, res) {
    Customer.findByPk(req.params.email)
        .then(data => {
            res.send(data);
        })
}

function updateCustomers(req, res) {
    Customer.update(req.body,
        {
            where: { email: req.body.email }
        })
        .then(data => {
            console.log("update done", data);
            res.send(data);
        })
}

function deleteCustomers(req, res) {
    Customer.destroy({
        where: { email: req.body.email }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err=>{
            res.sendStatus(400).send({message:err})
        })
}


module.exports = {
    createCustomer,
    findAllCustomers,
    findByEmailCustomer,
    updateCustomers,
    deleteCustomers
}