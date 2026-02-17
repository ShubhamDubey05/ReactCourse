import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const Admin = (props) => {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white overflow-hidden px-4 md:px-10 py-8">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 opacity-20 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 space-y-10">
        {/* Header */}
        <Header changeUser={props.changeUser} data={props.data} />

        {/* Create Task */}
        <CreateTask />

        {/* AllTask Scroll Container */}
        <div className="h-[400px] overflow-y-scroll no-scrollbar 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 
                rounded-2xl p-4">

  <AllTask />

</div>

      </div>
    </div>
  );
};

export default Admin;
