const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// test access
router.get('/public', async (req, res) => {
    console.log("tou have access to public")
});

router.get('/protected', async (req, res) => {
    console.log("tou have access to protected")
});

router.get('/admin ', async (req, res) => {
    console.log("tou have access to admin ")
});


module.exports = router;