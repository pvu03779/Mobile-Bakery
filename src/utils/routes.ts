import { createBrowserRouter } from "react-router";
import { Root } from "../components/Root";
import { Home } from "../components/Home";
import { Products } from "../components/Products";
import { News } from "../components/News";
import { Profile } from "../components/Profile";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "news", Component: News },
      { path: "profile", Component: Profile },
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
    ],
  },
]);
