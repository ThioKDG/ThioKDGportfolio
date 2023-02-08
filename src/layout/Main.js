import axios from "axios";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import MainProject from "../components/MainProject";
import Rolling from '../components/Rolling';
import Skill from "../components/Skill";

import "./layStyles/layMain.scss";
import "./layStyles/layMobile.scss"
import Top from "./Top";
import Header from "./Header";
import Footer from "./Footer";


function Main() {
   const [project, setProject] = useState([]);

   useEffect(()=>{
      const getData = async() => {
         const projectList = await axios.get("./data/projectDB.json");
         setProject(projectList.data.projectData); 
         console.log(projectList.data.projectData);
      };
      getData();
   }, []);
   return (
      <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         {/* <Top /> */}
         {/* <Header /> */}
         <section className='mainContainer'>
            <Rolling />
            <MainProject project={project} />
            <Skill />
         </section>
         <Footer />
      </motion.div>
   );
}

export default Main;