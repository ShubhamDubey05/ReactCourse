import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext); // get employees/admin from context
  const employees = authData?.employees || [];

  return (
    <div className="mt-5 p-5 rounded bg-gray-800 border border-gray-700 shadow">
      <div className="bg-red-200 flex justify-between mb-2 py-2 px-4 rounded text-gray-800 font-semibold">
        <h2 className=" font-bold w-1/4">Employee Name</h2>
        <h3 className=" font-bold w-1/4">New Task</h3>
        <h4 className=" font-bold w-1/4">Active Task</h4>
        <h2 className=" font-bold w-1/4">Completed</h2>
        <h2 className=" font-bold w-1/4">Failed</h2>
      </div>

      {employees.map((emp) => (
        <div
          key={emp.id}
          className="flex justify-between py-2 px-4 mb-1 rounded bg-gray-700 text-white"
        >
          <span className="w-1/4  font-bold text-white">{emp.firstName}</span>
          <span className="w-1/4 font-bold text-blue-500">{emp.taskCounts.new}</span>
          <span className="w-1/4 font-bold text-yellow-400">{emp.taskCounts.progress}</span>
          <span className="w-1/4 font-bold text-green-500">{emp.taskCounts.complete}</span>
          <span className="w-1/4 font-bold text-red-500" >{emp.taskCounts.failed}</span>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
