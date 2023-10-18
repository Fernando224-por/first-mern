import Task from '../models/task.model.js'
export const getTasks = async (req, res) => {
  try {
    const task = await Task.find({
      user: req.user.id
    }).populate('user')
    res.json(task)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const createTasks = async (req, res) => {
  try {
    const { title, description, date } = req.body
    console.log(req.user)
    const newtask = new Task({
      title,
      description,
      date,
      user: req.user.id
    })
    const saveTask = await newtask.save()
    res.json(saveTask)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).json({
        message: 'you not have task'
      })
    } else {
      res.json(task)
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}
export const deleteTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
      return res.status(404).json({
        message: 'Task not found'
      })
    } else {
      return res.sendStatus(204)
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const updateTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!task) {
      return res.status(404).json({
        message: 'Task not found'
      })
    } else {
      res.json(task)
    }
  } catch (error) {
    return res.status(500).json({
      message: error
    })
  }
}
