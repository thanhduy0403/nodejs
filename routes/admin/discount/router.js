const express = require('express');
const router = express.Router();

const { validateSchema } = require("../../../utils");

const {
    getlimit, getalldicounts,

} = require('./controller');

router.get('/1', getlimit);
router.get('/2',getalldicounts)


module.exports = router;