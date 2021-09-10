
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState (false)

  //This is a react hooks example.
  const [tasks, setTasks] = useState([ 
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:50pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 8th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Fix car',
        day: 'Feb 7th at 5:30pm',
        reminder: false,
    }
    ]
  )

  //Add task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random()*10000) +1
    console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }

  //delete task
  const deleteTask = (id) => {
    //console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => 
    task.id === id ? {...task,reminder:!task.reminder}:task
    )
    )
  }

  //Application structure is defined here!
  return (
    <div className='container'>
      <h1> Task Tracker</h1>
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}


export default App;



/*
import React from 'react'
import Header from './components/Header'

class App extends React.Component{
  render(){
    return <h1>Hello from a class</h1>
  }
}

export default App
*/
