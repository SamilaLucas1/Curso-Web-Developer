module.exports = {
    create (req, res) {
        const {id, name} = req.body;
        res.json({situation: `User ${name} de ${id} created`});
    },

    read (req, res) {
        const {id} = req.params;
        res.json({situation: `Show user de id ${id}`});
    },

    update(req, res) {
        const {id} = req.params
        res.json({situation: `Update user ${id}`})
        
    },

    delete(req, res) {
        const {id} = req.params
        res.json({situation: `User ${id} deleted`})
        
    }
}