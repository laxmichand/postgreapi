const express= require('express');
const app = express();
const db = require('./db.config');
var cluster = require('cluster');


if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
}else{

app.use(express.json());

// table creation if not exits
db.sequelize.sync()
.then(data=>{
    console.log("success");
})
.catch(err=>{
    console.log(err);
})
const controller = require('./customer.controller.js');


app.get('/',(req,res)=>{
    res.send('server is running' + cluster.worker.id);
});

// create new customers
app.post('/customers/new',(req,res)=>{
    controller.createCustomer(req,res);
});

// get all customers
app.get('/customers',(req,res)=>{
    controller.findAllCustomers(res); 
});

//get customer by email id
app.get('/customers/:email',(req,res)=>{
    controller.findByEmailCustomer(req,res);
});

//  update th customer data.
app.put('/customers/update',(req,res)=>{
    controller.updateCustomers(req,res);
});

// for delete customer or status invalid status
app.delete('/customers/delete/:email',(req,res)=>{
    controller.deleteCustomers(req,res);;
})

app.listen(4000,()=>{
    console.log("server is running at 4000")
})
}
