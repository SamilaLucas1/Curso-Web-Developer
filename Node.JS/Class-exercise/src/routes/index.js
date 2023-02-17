const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => {
    res.send('Exercise')
});

router.post('/use', controllers.create);
router.get('/use/:id', controllers.read);
router.put('/use/:id', controllers.update);
router.delete('/use/:id', controllers.delete);

module.exports = router;