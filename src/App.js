// components
import Top from "./layout/Top";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import "./asset/style/style.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Top />
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
