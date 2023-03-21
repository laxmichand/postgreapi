const { application } = require('express');
const { json } = require('sequelize');
const { Orders } = require('./db.config');
const db = require('./db.config');
const Customer = db.Customers;

function createCustomer(req, res) {
    if (!req.body.customer.email || !req.body.customer.name) {
        res.sendStatus(400)
            .send({
                message: 'Bad Data'
            })
    };
    const customerData = req.body.customer;
    Customer.create(customerData)
        .then(customer => {
            const order = req.body.order;
            order.customerEmail = customer.email;
            Orders.create(order)
                .then(order => {
                    res.send({ data: { ...customer, ...order } }).sendStatus(200);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err
                    })
                })
        })
        .catch(err => {
            res.status(500).send({
                message: err
            })
        })
};

function findAllCustomers(res) {
    Customer.findAll({ include: Orders })
        .then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.sendStatus(400).send({
                message: err
            })
        })
};

function findByEmailCustomer(req, res) {
    Customer.findByPk(req.params.email, { include: Orders })
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
        .catch(err => {
            res.sendStatus(400).send({ message: err })
        })
}

module.exports = {
    createCustomer,
    findAllCustomers,
    findByEmailCustomer,
    updateCustomers,
    deleteCustomers
}