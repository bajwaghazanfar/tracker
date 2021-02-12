import { useState } from "react"
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import React from 'react'
import Task from "./Components/Task"

export const App = () => {

  const [tasks, setTasks] =useState([{
    id: 1,
    text: "Doctor's Appointment",
    day: "12 February 2021",
    reminder: true
},
{
    id: 2,
    text: "Dentist Appointment",
    day: "1 January 2022",
    reminder: true
},
{
    id: 3,
    text: "Shopping",
    day: "3 March 2021",
    reminder: false,

}])

//Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => id !== task.id))
}

  return (
    <div className= "container">
      <Header title= "tracker" />
      {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete={deleteTask}/> : "No tasks to show"}
    </div>
  )
} 


export default App;
