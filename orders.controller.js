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

module.exports = {
    createOrder
}