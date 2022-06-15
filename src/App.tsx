import Styles from "./Styles/main.module.scss";
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
import { Helmet } from "react-helmet";
import icon from "./Images/icon.png";

export const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <link rel="icon" href={icon} />
      </Helmet>
      <div className={Styles.stickyContainer}>
        <Nav/>
        <DarkModeToggle/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dotnet-and-csharp" element={<Dotnetandcsharp />} /> 
        <Route path="/html-and-css" element={<Htmlandcss />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}