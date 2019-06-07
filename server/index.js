const express = require("express");
const massive = require('massive');
require('dotenv').config();

let { CONNECTION_STRING, SERVER_PORT } = process.env;


const controller = require('./controllers/controller')

let app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connected to database');
})


app.post('/api/products', controller.add);
app.put('/api/products/:id', controller.updateProduct);
app.get('/api/products/:id', controller.getId);
app.get('/api/products', controller.getAll);
app.delete('/api/products/:id', controller.deleteProduct);





app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})