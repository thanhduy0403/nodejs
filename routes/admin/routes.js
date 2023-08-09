var express = require("express");
const router = express.Router();

const passport = require("passport");

const {
  passportConfigAdmin,
  passportConfigLocalAdmin,
} = require("../../middle-wares/passportAdmin");

passport.use("jwtAdmin", passportConfigAdmin);
passport.use("localAdmin", passportConfigLocalAdmin);


const employeesRouter = require("./employee/router");
const categoryRouter = require("./category/router");
const supplierRouter = require("./supplier/router");
const productRouter = require("./product/router");
const customerRouter = require("./customer/router");
const orderRouter = require ("./order/router")
const discountRouter = require ("./discount/router")


router.use("/employees",employeesRouter);
router.use("/product",productRouter);
router.use("/category", categoryRouter);
router.use("/discount", discountRouter);

router.use("/suppliers",passport.authenticate('jwtAdmin',{session:false}),supplierRouter);
router.use("/customer",passport.authenticate('jwtAdmin',{session:false}),customerRouter);
router.use ("/order", orderRouter)

module.exports = router;
