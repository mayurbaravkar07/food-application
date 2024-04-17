import { Outlet } from "react-router-dom";
const About=()=>{
    return(
    <div>
        <h1>About us Page </h1>
            <p>Food Application</p>
        <Outlet/>
    </div>);
}



export default About;
