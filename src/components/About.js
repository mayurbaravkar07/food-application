import { Outlet } from "react-router-dom";
const About=()=>{
    return(
    <div>
        <h1>About us Page </h1>
        <p>This is the Namasate React Live Course Course  Chapter 9 and am learning how to define routes in the application</p>
        <Outlet/>
    </div>);
}



export default About;
