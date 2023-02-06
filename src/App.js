// components
import Top from "./layout/Top";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import "./asset/style/style.scss";
import { Route, Routes } from "react-router-dom";
import Sub1 from "./components/sub/Sub1";
import Sub2 from "./components/sub/Sub2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ThioKDGportfolio" element={<Main />} />
        <Route path="/sub1" element={<Sub1 />} />
        <Route path="/sub2" element={<Sub2 />} />
      </Routes>

    </>
  );
}

export default App;
