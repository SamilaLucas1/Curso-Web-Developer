const prisma = require('../databases');

module.exports ={
    async read(req, res) {
        const { id } = req.query;
        if (id) {
        const listCourses = await prisma.courses.findUnique({where: {id: Number(id)}});
        if (!listCourses) return res.json('User not found')
        res.json(listCourses)
        } else {
        const listCourses = await prisma.courses.findMany()
        return res.json(listCourses)
        }
    },

    async create(req, res) {
        try {
        const {name, hours} = req.body
        const createCourses = await prisma.courses.create({data: {name, hours: Number(hours)}})
        res.json(createCourses)
        } catch (error) {
            return res.json(error.message)
        }
    },

    async update(req, res) {
        try {
            const {id} = req.params;
            const {name, hours} = req.body
            const updateCourse = await prisma.courses.update({data: {name, hours}, where:{id: Number(id)}});
            res.json(updateCourse)
        } catch (error) {
            return res.json(error.message)
        }
    },

    async delete(req, res) {
        try {
            const {id} = req.params;
            
            const deleteCourse = await prisma.courses.delete({where:{id: Number(id)}});
            res.json(`Curso ${deleteCourse.name} deletado com sucesso!`)
        } catch (error) {
            return res.json(error.message)
        }
    }
}