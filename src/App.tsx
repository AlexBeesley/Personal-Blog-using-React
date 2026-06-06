import Styles from "./Styles/main.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dotnetandcsharp from "./Pages/DotNetAndCsharp";
import WebDev from "./Pages/WebDev";
import DevOps from "./Pages/DevOps";
import MachineLearning from "./Pages/MachineLearning";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./Components/nav";
import DarkModeToggle from "./Components/darkmodetoggle";
import Footer from "./Components/footer";
import icon from "./Images/icon.png";
import CookieConsent from "./Components/CookieConsent";

export const App = () => {
  return (
    <BrowserRouter>
      <link rel="icon" href={icon} />
      <div className={Styles.stickyContainer}>
        <Nav />
        <DarkModeToggle />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dotnet-and-csharp" element={<Dotnetandcsharp />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <CookieConsent />
      <Footer />
    </BrowserRouter>
  )
}