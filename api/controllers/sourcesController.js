const db = require('../data/db')

function sourcesController() {
  async function get(req, res) {
    const id = parseInt(req.params.sourceId, 10)

    db.pool.query(
      'SELECT * FROM public."Sources" WHERE Id = $1',
      [id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      }
    )
  }
  async function getAll(req, res) {
    db.pool.query('SELECT * FROM public."Sources"', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }
  async function create(req, res) {
    const { source } = req.body
    const { name } = source

    db.pool.query(
      'INSERT INTO public."Sources"(name) VALUES($1)',
      [name],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results)
      }
    )
  }

  return { get, getAll, create }
}

module.exports = sourcesController
