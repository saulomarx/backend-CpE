const { Router } = require('express');

const controller = require('../controller/pesquisador');

const router = Router();

console.log()

router.route('/')
  .get((req, res) => controller.getProducts()
    .then(products => res.status(200).send(products))
    .catch(() => next())
  );

module.exports = router;
