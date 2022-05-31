import "./Styles/main.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dotnetandcsharp from "./Pages/dotnet-and-csharp";
import Htmlandcss from "./Pages/html-and-css";
import Tprwcg from "./Pages/tpr-wcg";
import Demo from "./Pages/Demo";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./Components/Nav/nav";
import DarkModeToggle from "./Components/DarkMode/darkmodetoggle";
import Footer from "./Components/Footer/footer";

export const App = () => {
  return (
    <Router>
      <Nav/>
      <DarkModeToggle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dotnet-and-csharp" element={<Dotnetandcsharp />} /> 
        <Route path="/html-and-css" element={<Htmlandcss />} />
        <Route path="/tpr-wcg" element={<Tprwcg />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}