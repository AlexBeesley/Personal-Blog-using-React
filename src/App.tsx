import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Dotnetandcsharp from "./Pages/dotnet-and-csharp";
import Htmlandcss from "./Pages/html-and-css";
import Tprwcg from "./Pages/tpr-wcg";
import ErrorPage from "./Pages/ErrorPage";
import React from "react";

export const App = () => {
  return (
    <Router>
      <nav>
        <div className="nav-desktop">
          <Link className="navlink" to="/"> Home </Link>
          <Link className="navlink" to="/dotnet-and-csharp"> .NET and C# </Link>
          <Link className="navlink" to="/html-and-css"> HTML and CSS </Link>
          <Link className="navlink" to="/tpr-wcg"> TPR Web Change Group </Link>
        </div>
        <div className="nav-mobile">
          <Link className="navlink" to="/"> <i className="fa-solid fa-house-user"></i> </Link>
          <Link className="navlink" to="/dotnet-and-csharp"> <i className="fa-solid fa-code"></i> </Link>
          <Link className="navlink" to="/html-and-css"> <i className="fa-solid fa-file-code"></i> </Link>
          <Link className="navlink" to="/tpr-wcg"> <i className="fa-solid fa-briefcase"></i> </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dotnet-and-csharp" element={<Dotnetandcsharp />} /> 
        <Route path="/html-and-css" element={<Htmlandcss />} />
        <Route path="/tpr-wcg" element={<Tprwcg />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>
        <p>&copy; 2022 Alexander Beesley @ TPR</p>
        <div className="icon-container">
            <a href="mailto:david.beesley@tpr.gov.uk" 
                title="Email"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/alexander-beesley-bb1814206/" target="_blank" rel="noreferrer"
                title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/brighton_by_the_sea/" target="_blank" rel="noreferrer"
                title="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/DABeesleyTPR" target="_blank" rel="noreferrer"
                title="GitHub"><i className="fa-brands fa-github"></i></a>
        </div>
      </footer>
    </Router>
  );
}