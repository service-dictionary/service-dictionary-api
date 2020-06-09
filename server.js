const express = require('express')

require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')

const sourceRoutes = require('./api/routes/sourcesRoute')

app.use(cors())
app.use('/', express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // support json encoded bodies

app.get('/', (req, res) => {
  res.send('Welcome adventurer!')
})
app.use('/api/sources', sourceRoutes())
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
