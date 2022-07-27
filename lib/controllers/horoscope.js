const { Router } = require('express');
const { getHoroscope } = require('../../data/horoscope');

const router = Router();

module.exports = router;

router
  .get('/:sign', async (req, res) => {
    const sign = req.params.sign;
    const signFuture = await getHoroscope(sign);
    res.json(signFuture);
    console.log(signFuture);
  });

