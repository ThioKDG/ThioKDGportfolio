import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./layStyles/layHaeder.scss";

function Header(props) {
   const [head, setHead] = useState(false);
   const refHead = useRef();
   useEffect(() => {
      const wheelHandler = (e) =>{
         e.deltaY >= 100 ? setHead(true) : setHead(false);
         console.log(e.deltaY);
      }

      refHead.current.addEventListener("wheel", wheelHandler);

      return () =>  refHead.current.removeEventListener("wheel", wheelHandler);
   }, [])
   

   return (
      <header className={head ? "headerContianer scrolled" : "headerContianer"} ref={refHead}>
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