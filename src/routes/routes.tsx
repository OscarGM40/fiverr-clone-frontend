import { MainLayout } from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Gigs from "../pages/gigs/Gigs";
import Gig from "../pages/gig/Gig";
import Orders from "../pages/orders/Orders";
import MyGigs from "../pages/myGigs/MyGigs";
import Add from "../pages/add/Add";
import Messages from "../pages/messages/Messages";
import Message from "../pages/message/Message";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    
    errorElement:<h1>Page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/mygigs",
        element: <MyGigs />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
  
    ],
  },

]);
