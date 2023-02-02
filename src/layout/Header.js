import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./layStyles/layHaeder.scss";

function Header(props) {
   const [head, setHead] = useState(false);
   const refHead = useRef();
   useEffect(() => {
      const wheelHandler = (e) =>{
         e.deltaY >= 100 ? setHead(true) : setHead(false);
      }
      /* 휠 이벤트 발생시 델타와이 값을 받아서 헤더를 숨겨줌 */
      window.addEventListener("wheel", wheelHandler);

      return () =>  window.removeEventListener("wheel", wheelHandler);
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
                  <Link to="/" className="mobileMenuOpen">
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