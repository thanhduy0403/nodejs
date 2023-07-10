var express = require ('express')
const router = express.Router();

const categoryRouter = require('./category/router');
const supplierRouter = require ('./supplier/router');
const productRouter = require ('./product/router');

router.use ('/category',categoryRouter);
router.use('/suppliers', supplierRouter);
router.use('/product', productRouter);

module.exports = router