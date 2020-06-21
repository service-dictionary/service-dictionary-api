const { SourceType } = require('../data/database')

function sourcesTypesController() {
  async function get(req, res) {
    const id = parseInt(req.params.id, 10)
    SourceType.findByPk(id)
      .then((s) => {
        res.json(s)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  async function getAll(req, res) {
    SourceType.findAll({
      where: {
        is_deleted: false,
      },
    })
      .then((s) => {
        res.json(s)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  async function create(req, res) {
    const { sourceType } = req.body
    SourceType.create(sourceType)
      .then((s) => {
        res.json(s)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  async function update(req, res) {
    const { sourceType } = req.body
    SourceType.update(sourceType, {
      where: {
        id: req.params.id,
      },
    })
      .then((rows) => {
        res.json(rows)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  async function remove(req, res) {
    SourceType.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send('SourceType successfully deleted')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  return { get, getAll, create, update, remove }
}

module.exports = sourcesTypesController
