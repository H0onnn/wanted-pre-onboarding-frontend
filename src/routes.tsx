import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import TodoPage from "./pages/todos/TodoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/signup" Component={SignUpPage} />
      <Route path="/signin" Component={SignInPage} />
      <Route path="/todo" Component={TodoPage} />
    </Routes>
  );
};

export default AppRoutes;
