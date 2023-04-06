import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";

export const routes = [
  {
    path: "/",
    element: Home,
    auth: false,
  },
  {
    path: "/about",
    element: About,
    auth: false,
  },
  {
    path: "/profile",
    element: Profile,
    auth: true,
  },
  {
    path: "/login",
    element: LoginPage,
    auth: false,
  },
];
