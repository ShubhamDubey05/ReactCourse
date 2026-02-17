import React from "react";

const New = ({ data }) => {
  return (
    <div className="min-w-[300px] md:min-w-[350px] 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-2xl p-6 shadow-xl 
                    hover:scale-105 hover:shadow-blue-500/20 
                    transition-all duration-300">

      <div className="flex justify-between items-center">
        <h3 className="bg-blue-600/20 text-blue-400 text-xs px-4 py-1 rounded-full">
          {data.categories}
        </h3>
        <h4 className="text-gray-400 text-sm">{data.date}</h4>
      </div>

      <h1 className="text-xl font-semibold mt-4">{data.title}</h1>

      <p className="text-gray-400 text-sm mt-2">
        {data.description}
      </p>

      <div className="mt-5">
        <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default New;
