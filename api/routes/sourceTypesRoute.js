const express = require('express')

const router = express.Router()

const sourceTypesController = require('../controllers/sourceTypesController')

module.exports = () => {
  const controller = sourceTypesController()

  router.route('/').get(controller.getAll).post(controller.create)

  router
    .route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.remove)

  return router
}
