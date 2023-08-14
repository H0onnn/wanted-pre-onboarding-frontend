import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/signup" Component={SignUpPage} />
      <Route path="/signin" Component={SignInPage} />
    </Routes>
  );
};

export default AppRoutes;
