const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            console.log(req.body)
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            next(ApiError.internal('Type already exists'))
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()