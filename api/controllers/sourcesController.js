const db = require('../data/db')

function sourcesController() {
  async function get(req, res) {
    const id = parseInt(req.params.sourceId, 10)

    db.pool.query(
      'SELECT s.sourceid, s.name, s.description, st.name as source_type, s.endpoint,  s.is_active, s.created \n' +
        'FROM public.sources s, public.source_types st \n' +
        'WHERE s.source_type_id = st.source_type_id \n' +
        'AND s.is_active = true \n' +
        'AND s.is_deleted = false \n' +
        'AND s.sourceid = $1',
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
    db.pool.query(
      'SELECT s.sourceid, s.name, s.description, st.name as source_type, s.endpoint,  s.is_active, s.created \n' +
        'FROM public.sources s, public.source_types st \n' +
        'WHERE s.source_type_id = st.source_type_id \n' +
        'AND s.is_active = true \n' +
        'AND s.is_deleted = false \n' +
        'ORDER BY sourceid ASC',
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      }
    )
  }
  async function create(req, res) {
    const { source } = req.body
    const { name } = source

    db.pool.query(
      'INSERT INTO public."sources"(name) VALUES($1)',
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
