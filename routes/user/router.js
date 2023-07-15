var express = require ('express')
const router = express.Router();

const passport = require('passport');

const {
  passportConfigUser,
  passportConfigLocalUser,
} = require('../../middle-wares/passportUser');

passport.use('jwtUser', passportConfigUser);
passport.use('localUser', passportConfigLocalUser);

const categoryRouter = require('./category/router');
const productRouter = require ('./product/router');
const customerRouter = require ('./customer/router');
const employeesRouter = require('./employee/router');
const ordersRouter = require('./order/router');

router.use('/product', productRouter);
router.use ('/category', passport.authenticate('jwtUser', { session: false }), categoryRouter);
router.use('/customer', passport.authenticate('jwtUser', { session: false }), customerRouter);
router.use('/employees', passport.authenticate('jwtUser', { session: false }), employeesRouter);
router.use('/orders', passport.authenticate('jwtUser', { session: false }), ordersRouter);

module.exports = router
