import { Link } from "react-router-dom";
import "./compStyle/projectStyle.scss";

function MainProject({ project }) {
   const path = process.env.PUBLIC_URL;

   return (
      <div className="projectWrapper">
         <ul class="projectList">
            {project.map((item) => (
               <li key={item.Id}>
                  <Link to="/">
                     <p className="projectPhoto">
                        <img src={path + `/image/main/${item.thumbnail}`} alt={item.projectName} />
                     </p>
                     <span className="langTit">{item.lang}</span>
                     <h3 className="projectTit">{item.projectName}</h3>
                     <p className="projectValue">{item.team}</p>
                     <span className="dateTxt">{item.date}</span>
                  </Link>
               </li>
            ))}
         </ul>
            
      </div>
   );
}

export default MainProject;