import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./layStyles/layHaeder.scss";

function Header(props) {
  const [head, setHead] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.deltaY >= 1 ? setHead(true) : setHead(false);
      console.log(e.deltaY);
      /* if (e.deltaY >= 100) {
        setHead(true);
      } else {
        setHead(false);
      } */
    };
    /* 휠 이벤트 발생시 deltaY 값을 받아서 헤더를 숨겨줌 */
    window.addEventListener("wheel", wheelHandler);

    return () => window.removeEventListener("wheel", wheelHandler);
  }, []);

  const toggleMenu = () => {
    setOpen((isOpen) => !isOpen);
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
          <h1 className="headerLogoH1">
            <Link to="./">portfolio</Link>
          </h1>
          <ul className={isOpen ? "headNaviList on" : "headNaviList"}>
            <li onClick={handleGoUpProject}>project</li>
            <li onClick={handleGoUpSkill}>skill</li>
            <li onClick={handleGoUpFooter}>about</li>
          </ul>
          <div onClick={() => toggleMenu()} className="moMenuOpen">
            <p className="hiddenWord">메뉴 열림 버튼</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
