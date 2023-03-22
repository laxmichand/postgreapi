const { Orders } = require('./db.config');

function createOrder(req, res) {
    if (!req.body.customerEmail || !req.body.product) {
        res.status(400)
            .send({
                message: 'Bad Data'
            })
    };
    const order = req.body;
    Orders.create(order)
        .then(orderData => {
            res.status(200).send({ data: orderData });
        })
        .catch(err => {
            res.status(500).send({
                message: err
            })
        })
};

function findAllOrders(req, res) {
    console.log("data is", req, res)
    Orders.findAll()
        .then(data => {
            console.log('find all orders', data);
            res.status(200).send(data);
        }).catch(err => {
            res.status(400).send({
                message: err
            })
        })
};

function findByEmailOrders(req, res) {
    Orders.findByPk(req.params.product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
}


module.exports = {
    createOrder,
    findAllOrders,
    findByEmailOrders
}