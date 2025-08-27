import React from 'react'
import Header from '../Others/Header'
import TaskCards from '../Others/TaskCards'
import Tasklist from '../Tasklist/Tasklist'

const Employee = (props) => {
  
  return (
    <div className="min-h-screen w-full p-7 bg-gray-900 text-white">

      <Header data={props.data} changeUser={props.changeUser} />
      <TaskCards data={props.data} />
      <Tasklist data={props.data} />
    </div>
  )
}

export default Employee
