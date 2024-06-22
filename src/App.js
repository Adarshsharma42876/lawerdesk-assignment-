// import Sidebar from './Components/Sidebar';
import MainContent from "./Components/MainContent";
import PageOne from "./Components/Pageones";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar";
import PageTwo from "./Components/page2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Sidebar /> */}
          <Route path={"/pageone"} element={<MainContent />}></Route>
          <Route path="/" element={<PageOne />}></Route>
          <Route path="/pagetwo" element={<PageTwo />}></Route>
          {/* Render the PageOne component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
