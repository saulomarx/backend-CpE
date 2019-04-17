const { Router } = require('express');
const productsRouter = require('./productsRouter');
const pesquisadoresRouter = require('./pesquisadoresRouter');

const router = Router();

router.use('/pesquisadores', pesquisadoresRouter);

module.exports = router;
