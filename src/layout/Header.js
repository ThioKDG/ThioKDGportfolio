import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./layStyles/layHaeder.scss";

function Header(props) {
   const [head, setHead] = useState(false);
   const [isOpen, setOpen] = useState(false);
   const refHead = useRef();
   const refNavi = useRef();
   const refBtn = useRef();

   useEffect(() => {
      const wheelHandler = (e) =>{
         e.deltaY >= 100 ? setHead(true) : setHead(false);
      }
      /* 휠 이벤트 발생시 델타와이 값을 받아서 헤더를 숨겨줌 */
      window.addEventListener("wheel", wheelHandler);

      return () =>  window.removeEventListener("wheel", wheelHandler);
   }, []);
   
   const toggleMenu = () => {
      setOpen(isOpen => !isOpen);
   };

   const handleGoUpProject = () => {
      window.scrollTo({
         top: 950,
         behavior: "smooth",
      });
   };
   const handleGoUpSkill = () => {
      window.scrollTo({
         top: 2400,
         behavior: "smooth",
      });
   };
   const handleGoUpFooter = () => {
      window.scrollTo({
         top: 3800,
         behavior: "smooth",
      });
   };

   return (
      <header className={head ? "headerContianer scrolled" : "headerContianer"}>
            <nav>
               <div className="navInner">
                  <h1 className='headerLogoH1'>
                     <Link to='/ThioKDGportfolio'>portfolio</Link> 
                  </h1>
                  <ul className={isOpen ? "headNaviList on" : "headNaviList"}>
                     <li><Link to='/ThioKDGportfolio' onClick={handleGoUpProject}>project</Link></li>
                     <li><Link to='/ThioKDGportfolio' onClick={handleGoUpSkill}>skill</Link></li>
                     <li><Link to='/ThioKDGportfolio' onClick={handleGoUpFooter}>about</Link></li>
                  </ul>
                  <Link to="/ThioKDGportfolio" onClick={()=>toggleMenu()} className="moMenuOpen">
                     <p className="hiddenWord">
                        메뉴 열림 버튼
                     </p>
                  </Link>
               </div>
            </nav>
      </header>
   );
}

export default Header;