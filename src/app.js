import React from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import { Title, HeaderComponent } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter} from "react-router-dom";


//Main App
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};





const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppLayout />);
} else {
  console.error("Root element not found");
}
