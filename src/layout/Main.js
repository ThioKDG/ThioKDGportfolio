import axios from "axios";
import { useEffect, useState } from "react";
import MainProject from "../components/MainProject";
import Rolling from '../components/Rolling';

import "./layStyles/layMain.scss";

function Main() {
   const [project, setProject] = useState([]);

   useEffect(()=>{
      const getData = async() => {
         const projectList = await axios.get("./DB/projectDb.json");
         setProject(projectList.data.projectData); 
      };
      getData();
   }, []);
   return (
      <section className='mainContainer'>
         <Rolling />
         <MainProject project={project} />
      </section>
   );
}

export default Main;