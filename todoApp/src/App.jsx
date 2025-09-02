import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    // ✅ Initial load from localStorage (runs once)
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Add Todo
  
const addTodo = (todo) => {
  let isDuplicate = todos.some(
    (t) => t.todo.toLowerCase() === todo.todo.toLowerCase()
  );
  if (isDuplicate) return alert("Todo already exists!"); 
  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  return true; // ✅ success → true return
};


  // ✅ Update Todo
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todoPrev) => (todoPrev.id === id ? updatedTodo : todoPrev))
    );
  };

  // ✅ Remove Todo
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todoPrev) => todoPrev.id !== id));
  };

  // ✅ Toggle Complete
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todoPrev) =>
        todoPrev.id === id
          ? { ...todoPrev, completed: !todoPrev.completed }
          : todoPrev
      )
    );
  };

  // ✅ Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
