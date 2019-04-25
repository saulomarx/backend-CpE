const { Router } = require('express');
const pesquisadoresRouter = require('./pesquisadoresRouter');
const checkRouter = require('./checkRouter');

const router = Router();

// TODO add a way to check the calling routes 
// router.use((req)=>{
//   console.log(req.url);
//   console.log(req.method);
//
// })

router.use('/pesquisadores', pesquisadoresRouter);
router.use('/check', checkRouter);

module.exports = router;
