module.exports = {
    create (req, res) {
        const {id, name} = req.body;
        res.json({
            status: `created`, 
            description: `User ${name} de ID: ${id} created`
        });
        
    },

    read (req, res) {
        const {id} = req.params;
        res.json({status: `listed`});
    },

    update(req, res) {
        const {id} = req.params
        res.json({
            situation: `Update`,
            description: `User de ID: ${id}`
        })
        
    },

    delete(req, res) {
        const {id} = req.params
        res.json({
            situation: `Deleted`,
            description: `User de ID: ${id}`
    })
        
    }
}