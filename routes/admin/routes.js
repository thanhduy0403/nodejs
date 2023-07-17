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

router.use("/employees",employeesRouter);
router.use("/category",passport.authenticate('jwtAdmin',{session:false}), categoryRouter);
router.use("/suppliers",passport.authenticate('jwtAdmin',{session:false}),supplierRouter);
router.use("/product",passport.authenticate('jwtAdmin',{session:false}), productRouter);
router.use("/customer",passport.authenticate('jwtAdmin',{session:false}),customerRouter);
router.use ("order",passport.authenticate('jwtAdmin',{session:false}),orderRouter)

module.exports = router;
