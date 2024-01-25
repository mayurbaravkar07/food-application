import React, { Profiler, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import { Title, HeaderComponent } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileF";
import ProfileC from "./components/ClassBasedComponents/ProfileC";
import Shimmer from "./components/ShimmerUI";
//import Cart from "./components/ClassBasedComponents/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const  CartC =lazy(()=>import('./components/ClassBasedComponents/CartC'));
//Main App
const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
      <HeaderComponent />
     <Outlet/>
      <Footer />
      </Provider>
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
        element:<About/>,
        children:[
          {
           path:"profile",
           element:<ProfileC/>
         }
      
      ]
       },
       {
        path:"/contact",
        element:<Contact/>
       },
       {
        path:"/cart",
        element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>
       },
       {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
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
