const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const connectDB = require('./config/db.js')   // <- add this
const productController = require('./controllers/productController');

connectDB()

app.use('/api', productController);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost/${port}`)
})