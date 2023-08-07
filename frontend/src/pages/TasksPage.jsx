import React, { useEffect } from "react";
import TasksCard from "../components/tasks/TasksCard";
import { useTasks } from "../context/Tasks.context";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0) {
    <div className="flex justify-items-center justify-center h-[calc(100vh-10rem)]">
      <p className=" text-3xl font-bold">Not task found</p>
    </div>;
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TasksCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksPage;
