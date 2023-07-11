var express = require ('express')
const router = express.Router();

const categoryRouter = require('./category/router');
const supplierRouter = require ('./supplier/router');
const productRouter = require ('./product/router');
const customerRouter = require ('./customer/router');

router.use ('/category',categoryRouter);
router.use('/suppliers', supplierRouter);
router.use('/product', productRouter);
router.use ('/customer',customerRouter)

module.exports = router