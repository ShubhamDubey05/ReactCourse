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
      isNew: true,
      active: false,
      failed: false,
      complete: false,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    data.forEach((elem) => {
      if (elem.firstName.toLowerCase() === assignee.toLowerCase()) {
        elem.tasks.push(newTask);
        elem.taskCounts = elem.taskCounts || { new: 0, complete: 0, progress: 0, failed: 0 };
        elem.taskCounts.new += 1;
      }
    });

    setLocalStorage("employees", data);

    setTitle("");
    setDate("");
    setAssignee("");
    setCategories("");
    setDescription("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={submitHandler}
        className="w-full lg:w-[85%] mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 transition hover:shadow-purple-500/20"
      >
        <div className="space-y-5">
          <Input label="Task Title" value={title} setValue={setTitle} placeholder="Make UI Design" />
          <Input label="Date" value={date} setValue={setDate} type="date" />
          <Input label="Assign To" value={assignee} setValue={setAssignee} placeholder="Employee name" />
          <Input label="Categories" value={categories} setValue={setCategories} placeholder="Design, Frontend" />
        </div>

        <div className="flex flex-col space-y-5">
          <div>
            <label className="text-gray-300 text-sm">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="8"
              placeholder="Enter task details..."
              className="mt-2 w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 cursor-pointer active:scale-95 transition-all duration-300 py-2.5 rounded-xl shadow-lg font-semibold"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, value, setValue, type = "text", placeholder }) => (
  <div>
    <label className="text-gray-300 text-sm">{label}</label>
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
      className="mt-2 w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-500"
    />
  </div>
);

export default CreateTask;
