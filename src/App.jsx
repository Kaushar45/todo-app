import { useState } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <section className="flex justify-center item-center mx-12 p-5 ">
        <form className="">
          <input placeholder="Add Your Task" type="text" />
          <button>Add</button>
          <button onClick={addTask}>Add</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-center items-center mb-2">
              <span
                className={`flex-1 ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text}
                <button
                  onClick={() => deleteTask(index)}
                  className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
