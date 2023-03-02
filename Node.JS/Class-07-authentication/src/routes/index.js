const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/users.js');
const loginControllrs = require('../controllers/auth.js');
const authMiddleware = require ('../middleware/auth.js');
const prisma = require('../databases/index');

router.get('/users', userControllers.read);
router.post('/users', userControllers.create);
router.put('/users/:id', userControllers.update);
router.delete('/users/:id', userControllers.delete);


router.post('/login', loginControllrs.auth)

router.get('/system', authMiddleware, async (req, res) => {
    const id = req.userID;
    const user = await prisma.users.findUnique({where: {id: Number(id)}});
    res.json({
        system: true, 
        id, 
        email: user.email,
        status: "authorized"});
})

module.exports = router