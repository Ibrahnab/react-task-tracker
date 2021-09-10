
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState (false)

  //This is a react hooks example, this is how we handle states
  const [tasks, setTasks] = useState([])

  //Add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([...tasks,data])
  }

  //delete task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    //console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
    
  },[])



  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks/`)
    const data = await res.json()

    return data
  }

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //toggle reminder
  const toggleReminder = async (id) =>{

    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}


    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method : 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => 
      task.id === id ? {...task,reminder:
        data.reminder}:task
    )
    )
  }

  //Application structure is defined here!
  return (
    <div className='container'>
      <h1> Task Tracker</h1>
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask} />} 

      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete = {deleteTask} 
      onToggle = {toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}


export default App;



/*

//The class component based App.JS

import React from 'react'
import Header from './components/Header'

class App extends React.Component{
  render(){
    return <h1>Hello from a class</h1>
  }
}

export default App
*/
