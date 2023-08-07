import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getAllTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within an TasksProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await getAllTaskRequest();
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    const res = await deleteTaskRequest(id);
    if (res.status === 204) {
      setTasks(tasks.filter((tasks) => tasks.id !== id));
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setTasks([...tasks, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setFormErrors([error.response.data.message]);
      }
    }
  };

  const loadTask = async (id) => {
    const res = await getTaskRequest(id);
    return res.data;
  };

  const updateTask = async (id,task) => {
    try {
      const res = await updateTaskRequest(id,task);
      return res.data
    } catch (error) {
      setFormErrors([error.response.data.message])
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        formErrors,
        loadTask,
        updateTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
