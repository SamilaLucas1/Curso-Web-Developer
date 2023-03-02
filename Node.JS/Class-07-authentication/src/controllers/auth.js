const prisma = require('../databases')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret, expiresIn} = require('../configs/auth.json');

module.exports = {
    async auth (req, res) {
       const { email, password } = req.body;
       if (!email) return res.status(400).json('Email is required');
       if (!password) return res.status(400).json('password is required');

       const user = await prisma.users.findUnique({where: {email}});
        if(!user) return res.status(401).json('Email or Password incorrect!');

        const passwordCheek = await bcrypt.compare(password, user.password);
        if (!passwordCheek) return res.status(401).json('Email or Password incorrect!');

        const token = jwt.sign({id: user.id}, secret, {expiresIn});
        
        return res.status(200).json({id: String(user.id), status: "Authentication", token}); 
    }
}