const express = require('express');
const router = express.Router();
const {getProducts, getProduct , createProduct , deleteProduct , updateProduct} = require('../controller/product.controller');


router.get("/", getProducts);

router.get("/:id",getProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

module.exports = router;



