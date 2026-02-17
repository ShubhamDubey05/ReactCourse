import React from "react";

const Failed = ({ data }) => {
  return (
    <div className="min-w-[300px] md:min-w-[350px] 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-2xl p-6 shadow-xl">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600/20 text-red-400 text-xs px-4 py-1 rounded-full">
          {data.categories}
        </h3>
        <h4 className="text-gray-400 text-sm">{data.date}</h4>
      </div>

      <h1 className="text-xl font-semibold mt-4">{data.title}</h1>

      <p className="text-gray-400 text-sm mt-2">
        {data.description}
      </p>

      <div className="mt-5">
        <button className="w-full bg-red-600 px-4 py-2 rounded-lg text-sm">
          Failed
        </button>
      </div>
    </div>
  );
};

export default Failed;
