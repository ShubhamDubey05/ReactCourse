import React from "react";

const TaskCards = ({data}) => {
 
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-6">
      <div className="flex flex-col items-center justify-center 
                      w-full sm:w-[48%] lg:w-[23%] 
                      bg-gray-800 border border-gray-700 text-white py-6 px-9 rounded-xl shadow 
                      hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-semibold">{data.taskCounts.progress}</h1>
        <h3 className="text-xl font-medium text-green-400">In Progress</h3>
      </div>

      <div className="flex flex-col items-center justify-center 
                      w-full sm:w-[48%] lg:w-[23%] 
                      bg-gray-800 border border-blue-600 text-white py-6 px-9 rounded-xl shadow 
                      hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-semibold">{data.taskCounts.new}</h1>
        <h3 className="text-xl font-medium text-blue-400">New Task</h3>
      </div>

      <div className="flex flex-col items-center justify-center 
                      w-full sm:w-[48%] lg:w-[23%] 
                      bg-gray-800 border border-pink-600 text-white py-6 px-9 rounded-xl shadow 
                      hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-semibold">{data.taskCounts.complete}</h1>
        <h3 className="text-xl font-medium text-pink-400">Completed</h3>
      </div>

      <div className="flex flex-col items-center justify-center 
                      w-full sm:w-[48%] lg:w-[23%] 
                      bg-gray-800 border border-green-600 text-white py-6 px-9 rounded-xl shadow 
                      hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-semibold">{data.taskCounts.failed}</h1>
        <h3 className="text-xl font-medium text-green-400">Closed</h3>
      </div>
    </div>
  );
};

export default TaskCards;
