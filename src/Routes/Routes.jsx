import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {index:true,Component:Home},
        {path:'signup',Component:SignUp},
        {path:'signin',Component:SignIn}
    ]
  },
]);