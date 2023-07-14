var express = require("express");
const router = express.Router();

const passport = require("passport");

const {
  passportConfigAdmin,
  passportConfigLocalAdmin,
} = require("../../middle-wares/passportAdmin");

passport.use("jwtAdmin", passportConfigAdmin);
passport.use("localAdmin", passportConfigLocalAdmin);

const categoryRouter = require("./category/router");
const supplierRouter = require("./supplier/router");
const productRouter = require("./product/router");
const customerRouter = require("./customer/router");
const employeesRouter = require("./employee/router");

router.use("/category", categoryRouter);
router.use("/suppliers", supplierRouter);
router.use("/product", productRouter);
router.use("/customer", customerRouter);
router.use("/employees", employeesRouter);

module.exports = router;
