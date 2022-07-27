const { Router } = require('express');
const { zodiacs } = require('../../data/zodiac');

const router = Router();

module.exports = router;

router
  .get('/:id', (req, res) => {
    const zodDetail = zodiacs.find((zodDetail) => zodDetail.id === req.params.id);
    res.json(zodDetail);
  })

  .get('/', (req, res) => {
    const zods = zodiacs.map((zods) => ({ id: zods.id, name: zods.name }));
    res.json(zods);

  });
