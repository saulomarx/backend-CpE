const { Router } = require('express');

const controller = require('../controller/pesquisador');

const router = Router();


router.route('/')
  .get((req, res) => {
    return controller.getPesquisadores(req.query)
    .then(products => res.status(200).send(products))
    .catch(() => next())}
  );

  router.route('/:id')
    .get((req, res) => {
      return controller.get(req.params.id)
      .then(products => res.status(200).send(products))
      .catch(() => next())}
    );


module.exports = router;
