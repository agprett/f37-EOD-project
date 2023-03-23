let task1 = {name: 'Sweep the floor', priority: 'Low', status: true}

let task2 = {name: 'Get groceries', priority: 'Medium', status: true}

let task3 = {name: 'Make dinner', priority: 'High', status: true}

let tasks = [task1, task2, task3]

module.exports = {
  getTasks: (req, res) => {
    res.status(200).send(tasks)
  },

  addTask: (req, res) => {
    const {name, priority} = req.body

    let status = false

    let newTask = {name, priority, status}

    tasks.push(newTask)

    res.sendStatus(200)
  }
}