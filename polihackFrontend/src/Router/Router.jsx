import { createBrowserRouter } from "react-router-dom";
import { Users } from "../Pages/Users";
import { Razvan } from "../Pages/Razvan";
import { ChatBot } from "../views/ChatBot";
import { Page1 } from "../views/page1";

import Home from "../views/home";
import Login from "../views/login-page";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


  

const routes = [
    {
        path:"/",
        element: <>
                <Home/>
                </>
    },
    {
        path:"/Test",
        element: <Page1/>,
    },
    
    {
        path:"/Users",
        element: <Users/>,
    },
    {
        path:"/register",
        element: <Razvan/>,
    },
   
    {
        path:"/Login",
        element: <Login/>,
    },
    {
        path:"/ChatBot",
        element: <ChatBot/>,
    }
];

export const router = createBrowserRouter(routes);

