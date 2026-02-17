import React from "react";

const Card = ({ count, title, color }) => (
  <div className="flex flex-col items-center justify-center 
                  w-full sm:w-[48%] lg:w-[23%]
                  bg-white/5 backdrop-blur-xl border border-white/10 
                  py-8 px-6 rounded-2xl shadow-xl
                  hover:scale-105 hover:shadow-purple-500/20 
                  transition-all duration-300">

    <h1 className="text-3xl font-bold">{count}</h1>
    <h3 className={`text-lg font-medium mt-2 ${color}`}>{title}</h3>
  </div>
);

const TaskCards = ({ data }) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-6">
      <Card count={data.taskCounts.progress} title="In Progress" color="text-yellow-400" />
      <Card count={data.taskCounts.new} title="New Tasks" color="text-blue-400" />
      <Card count={data.taskCounts.complete} title="Completed" color="text-green-400" />
      <Card count={data.taskCounts.failed} title="Failed" color="text-red-400" />
    </div>
  );
};

export default TaskCards;
