import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import TaskCards from "../Others/TaskCards";

const Admin = ( props ) => {
  return (
    <div 
  
    className="  h-full w-full p-7 bg-gray-900 text-white overflow-auto">
      <Header changeUser={props.changeUser} data={props.data} />
      {/* <TaskCards data={data} /> */}
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Admin;
