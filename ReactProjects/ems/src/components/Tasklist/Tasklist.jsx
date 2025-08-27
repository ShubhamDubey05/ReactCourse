import React from 'react'
import { Progress } from './Progress'
import Complete from './Complete'
import Failed from './Failed'
import New from './New'

const Tasklist = ({data}) => {
  console.log(data)
  return (
    <div
      id="scroll-box"
      className="h-[55%] overflow-x-auto w-full mt-10 flex items-center justify-start gap-5 flex-nowrap py-5 px-5"
    >
      {data.tasks.map((ele)=>{
         if(ele.active){
           return <Progress key={ele.id} data={ele}/>
         }
         if(ele.complete){
           return <Complete key={ele.id} data={ele}/>
         }
         if(ele.failed){
           return <Failed key={ele.id} data={ele}/>
         }
         if(ele.newTask){
           return <New key={ele.id} data={ele} />
         }
         
      })}
     

      
      

     

      


      
    </div>
  )
}

export default Tasklist
