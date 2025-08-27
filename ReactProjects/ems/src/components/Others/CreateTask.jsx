import { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      date,
      categories,
      description,
      isNew: true,   // ✅ renamed
      active: false,
      failed: false,
      complete: false,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    data.forEach((elem) => {
      if (elem.firstName.toLowerCase() === assignee.toLowerCase()) {
        elem.tasks.push(newTask);

        // ensure taskCounts exists
        elem.taskCounts = elem.taskCounts || { new: 0, complete: 0, progress: 0 };
        elem.taskCounts.new= elem.taskCounts.new + 1;
      }
    });

    // update localStorage (using your util)
    setLocalStorage("employees", data);

    // clear form
    setTitle("");
    setDate("");
    setAssignee("");
    setCategories("");
    setDescription("");
  };

  return (
    <div className="mt-5 w-full">
      <form
        onSubmit={submitHandler}
        className="w-[80%] mx-auto bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Make a UI Design"
              className="mt-1 w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2 focus:ring focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="mt-1 w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2 focus:ring focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Assign To</label>
            <input
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              type="text"
              placeholder="Enter assignee name"
              className="mt-1 w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2 focus:ring focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Categories</label>
            <input
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              type="text"
              placeholder="Enter categories"
              className="mt-1 w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2 focus:ring focus:ring-green-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-5">
          <div>
            <label className="block text-gray-300 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="8"
              placeholder="Enter task details..."
              className="mt-1 w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2 focus:ring focus:ring-green-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
