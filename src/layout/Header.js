import { Link } from "react-router-dom";
import "./layStyles/layHaeder.scss";

function Header(props) {
   return (
      <header className="headerContianer">
            <nav>
               <div className="navInner">
                  <h1 className='headerLogoH1'>
                     <Link to='/'>portfolio</Link> 
                  </h1>
                  <ul className="headNaviList">
                     <li><Link to='/'>project</Link></li>
                     <li><Link to='/'>skill</Link></li>
                     <li><Link to='/'>about</Link></li>
                  </ul>
               </div>
            </nav>
         
      </header>
   );
}

export default Header;