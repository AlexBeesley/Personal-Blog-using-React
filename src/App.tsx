import "./Styles/main.module.scss";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Dotnetandcsharp from "./Pages/dotnet-and-csharp";
import Htmlandcss from "./Pages/html-and-css";
import DevOps from "./Pages/devops";
import Demo from "./Pages/Demo";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./Components/Nav/nav";
import DarkModeToggle from "./Components/DarkMode/darkmodetoggle";
import Footer from "./Components/Footer/footer";

export const App = () => {
  return (
    
    <BrowserRouter>
      <Nav/>
      <DarkModeToggle/>
      <Routes>
        <Route path="Personal-Blog-using-React/" element={<Home />} />
        <Route path="Personal-Blog-using-React/dotnet-and-csharp" element={<Dotnetandcsharp />} /> 
        <Route path="Personal-Blog-using-React/html-and-css" element={<Htmlandcss />} />
        <Route path="Personal-Blog-using-React/devops" element={<DevOps />} />
        <Route path="Personal-Blog-using-React/demo" element={<Demo />} />
        <Route path="Personal-Blog-using-React/*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}