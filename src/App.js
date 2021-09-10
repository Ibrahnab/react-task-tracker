
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

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

  const variable = 2
  return (
    <div className='container'>

      <h1> hello</h1>
      <Header title ='a'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}



//<Tasks tasks={tasks} onDelete={deleteTask}/>
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
