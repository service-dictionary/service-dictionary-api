const express = require('express')

const router = express.Router()

const sourceController = require('../controllers/sourcesController')

module.exports = () => {
  const controller = sourceController()

  router.route('/').get(controller.getAll).post(controller.create)

  router.route('/:sourceId').get(controller.get)
  // .put(controller.update_a_source)
  // .delete(controller.delete_a_source)

  return router
}
