const Sequelize = require('sequelize')

const database = new Sequelize(process.env.DB_CONNECTION_STRING) // Example for postgres

// eslint-disable-next-line no-unused-vars
const Source = database.define('Source', {
  id_external: {
    type: Sequelize.UUID,
    primaryKey: false,
    unique: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  endpoint: Sequelize.STRING,
  is_deleted: Sequelize.BOOLEAN,
  is_active: Sequelize.BOOLEAN,
})

// eslint-disable-next-line no-unused-vars
const SourceType = database.define('SourceType', {
  id_external: {
    type: Sequelize.UUID,
    primaryKey: false,
    unique: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: Sequelize.STRING,
  is_deleted: Sequelize.BOOLEAN,
  is_active: Sequelize.BOOLEAN,
})

database
  .sync({
    // eslint-disable-next-line no-console
    // logging: console.log,
  })
  //   .then(() => {
  //     SourceType.create({
  //       name: 'JSON',
  //       is_deleted: false,
  //       is_active: true,
  //     })
  //   })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to sql db!')
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(`Error connecting to the db${error}`)
    // database.close()
  })
// }

// const Title = database.define('title', {
//   id: { type: Sequelize.STRING, primaryKey: true },
//   title: { type: Sequelize.JSONB, allowNull: false },
// })

// const Service = database.define('service', {
//   userId: { type: Sequelize.STRING, unique: 'user-name', allowNull: false },
//   name: { type: Sequelize.STRING, unique: 'user-name', allowNull: false },
// })

// const TitleService = database.define('title_service', {
//   location: Sequelize.STRING,
// })

// TitleService.belongsTo(Title, {
//   foreignKey: { allowNull: false, unique: 'title-service' },
//   onDelete: 'cascade',
// })

// TitleService.belongsTo(Service, {
//   foreignKey: { allowNull: false, unique: 'title-service' },
//   onDelete: 'cascade',
// })

module.exports = {
  Source,
  SourceType,
  database,
}
