const { Router } = require('express');

const router = Router();


router.route('/')
  .get((req, res) => res.status(200).send("ITS ALIVEEEEEEE!"));

module.exports = router;
