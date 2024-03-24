const { Router } = require('express')

const tagsRouter = Router()

const TagsController = require('../controller/TagsController')

const tagsController = new TagsController()

tagsRouter.get('/:user_id', tagsController.index)

module.exports = tagsRouter