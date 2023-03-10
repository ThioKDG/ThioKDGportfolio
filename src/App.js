// components
import Main from "./layout/Main";
import Sub1 from "./components/sub/Sub1";
import Sub2 from "./components/sub/Sub2";

import "./asset/style/style.scss";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./layout/Header";
import Top from "./layout/Top";
import NotFoundPage from "./layout/NotFoundPage";
import Sub3 from "./components/sub/Sub3";


function App() {
  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
          <Route path="/sub3" element={<Sub3 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
  
}

export default App;
