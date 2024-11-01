const express = require('express');
const app = express();
const productRoute = require('./routes/product.route');
const mongoose = require('mongoose');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

app.get('/', (req , res) => {
    res.send("Hello from Node API server Prem");
});

mongoose.connect("mongodb+srv://admin:<password>@backenddb.grqhu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"    
).then(() => {
    console.log("Connected to database!");
    app.listen(5173 , () => {
        console.log("Listening port 5173");
    });
}).catch(() => {
    console.log("Connection failed!");
});


