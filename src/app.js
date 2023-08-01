import express from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "Welcome to de API" }));
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

// Error Hander
app.use((err, req, res, net) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
