const Sequelize = require('sequelize')
const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
  }
})


module.exports = {
  getTasks: (req, res) => {
    sequelize.query(`SELECT * FROM tasks
    ORDER BY status,
      CASE priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
        ELSE 4
      END;`)
        .then(dbRes => {
          res.status(200).send(dbRes[0])
        })
  },

  addTask: (req, res) => {
    const {name, priority} = req.body

    let status = false

    let newTask = {name, priority, status}

    tasks.push(newTask)

    res.sendStatus(200)
  }
}