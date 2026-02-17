import React from "react";
import Header from "../Others/Header";
import TaskCards from "../Others/TaskCards";
import Tasklist from "../Tasklist/Tasklist";

const Employee = (props) => {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white px-4 md:px-10 py-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 space-y-10">
        <Header data={props.data} changeUser={props.changeUser} />
        <TaskCards data={props.data} />
        <Tasklist data={props.data} />
      </div>
    </div>
  );
};

export default Employee;
