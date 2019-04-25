const { Router } = require('express');
const pesquisadoresRouter = require('./pesquisadoresRouter');
const checkRouter = require('./checkRouter');

const router = Router();

router.use((req,res,next)=>{
  console.log(`${req.method} - ${req.url}`);
  return next()
})

router.use('/pesquisadores', pesquisadoresRouter);
router.use('/check', checkRouter);

module.exports = router;
