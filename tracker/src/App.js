import { useState } from 'react'

import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 4:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
  ])

  const [showAddTask, setShowAddTask] = useState(false)

  const title = "Tracker"

  const onAdd = () => {
    setShowAddTask(!showAddTask)
  }


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {...task, id}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ?
      {...task, reminder: !task.reminder} :
      task
    )))
  }

  return (
    <div className="container">
      <Header title={title} onAdd={onAdd} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder} /> :
      'You have no tasks!'}
    </div>
  );
}

export default App;
