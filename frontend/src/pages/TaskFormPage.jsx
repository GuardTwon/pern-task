import { Button, Card, Input, Label, Textarea } from "../components/ui/index";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/Tasks.context";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { createTask, formErrors, loadTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    let task;
    if (!params.ip) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.ip,data)
    }
    if (task) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.ip) {
      console.log(params);
      loadTask(params.ip).then((task) => {
        setValue("title", task.title), setValue("description", task.description);
      });
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {formErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.ip ? "Edit Task" : "Create Task"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor={"title"}>Title</Label>
          <Input
            type="text"
            placeholder="Title"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
          <Label htmlFor={"description"}>Description</Label>
          <Textarea
            placeholder="Description"
            rows={3}
            {...register("description")}
          />

          <Button>{params.ip ? "Update Task" : "Create Task"}</Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
