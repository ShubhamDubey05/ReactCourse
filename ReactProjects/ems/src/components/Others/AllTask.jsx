import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];

  return (
    <div className="mt-8 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

      <div className="hidden md:flex justify-between mb-4 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-gray-300 text-sm uppercase tracking-wide">
        <span className="w-1/5">Employee</span>
        <span className="w-1/5">New</span>
        <span className="w-1/5">Active</span>
        <span className="w-1/5">Completed</span>
        <span className="w-1/5">Failed</span>
      </div>

      {employees.map((emp) => (
        <div
          key={emp.id}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-4 px-6 mb-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5"
        >
          <span className="md:w-1/5 font-semibold">{emp.firstName}</span>
          <span className="md:w-1/5 text-blue-400">New: {emp.taskCounts.new}</span>
          <span className="md:w-1/5 text-yellow-400">Active: {emp.taskCounts.progress}</span>
          <span className="md:w-1/5 text-green-400">Done: {emp.taskCounts.complete}</span>
          <span className="md:w-1/5 text-red-400">Failed: {emp.taskCounts.failed}</span>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
