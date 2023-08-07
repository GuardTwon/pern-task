import { Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import { Container } from "./components/ui";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth } from "./context/Auth.context";
import { TaskProvider } from "./context/Tasks.context";

function App() {
  const { isAuth, loading } = useAuth();
  console.log(loading);
  if (loading) return <h1>...Loading</h1>;
  return (
    <>
      <Navbar />
      <Container className={"py-5"}>
        <Routes>
          <Route
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectTo={"/tasks"} />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route
            element={
              <ProtectedRoute isAllowed={isAuth} redirectTo={"/login"} />
            }
          >
            <Route
              element={
                <TaskProvider>
                  <Outlet />
                </TaskProvider>
              }
            >
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/tasks/new" element={<TaskFormPage />} />
              <Route path="/tasks/:ip/edit" element={<TaskFormPage />} />
            </Route>

            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
