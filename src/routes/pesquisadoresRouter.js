const express = require('express');

const controller = require('../controller/pesquisador');

const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const pesquisadores = await controller.getPesquisadores(req.query)
    return res.status(200).send(pesquisadores);
  } catch (error) {
    return next(error)
  }
});

router.get('/advanced', async (req, res, next) => {
  try {
    const pesquisadores = await controller.getPesquisadoresAdvanced(req.query)
    return res.status(200).send(pesquisadores);
  } catch (error) {
    return next(error)
  }
});

router
  .get('/:id' , async (req, res, next) => {
    try {
      const pesquisador = await controller.get(req.params.id)
      return res.status(200).send(pesquisador);
    } catch (error) {
      return next(error);
    }
});


module.exports = router;
