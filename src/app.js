import React from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import { Title, HeaderComponent } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



//Main App
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
     <Outlet/>
      <Footer />
    </>
  );
};


const  appRouter=createBrowserRouter([

  {
   path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
       },
      {
        path:"/about",
        element:<About/>
       },
       {
        path:"/contact",
        element:<Contact/>
       },
  ],
    errorElement:<Error/>

   },



   
   
 
  ]);



const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={appRouter} />);
} else {
  console.error("Root element not found");
}
