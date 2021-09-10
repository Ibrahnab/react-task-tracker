import {FaTimes} from 'react-icons/fa'


const Task = ({task,onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style = {crossStyle} onClick = {() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
            <p>{task.reminder}</p>
            
        </div>
    )
}


const crossStyle = {
    color: 'red',
    cursor: 'pointer'
}

export default Task
