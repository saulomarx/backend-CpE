const { Router } = require('express');
const pesquisadoresRouter = require('./pesquisadoresRouter');

const router = Router();

router.use('/pesquisadores', pesquisadoresRouter);

module.exports = router;
