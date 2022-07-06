import Styles from "./Styles/main.module.scss";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import Home from "./Pages/Home";
import Dotnetandcsharp from "./Pages/dotnet-and-csharp";
import WebDev from "./Pages/WebDev";
import DevOps from "./Pages/devops";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./Components/nav";
import DarkModeToggle from "./Components/darkmodetoggle";
import Footer from "./Components/footer";
import icon from "./Images/icon.png";
import Loader from "react-spinners/PropagateLoader";
import CookieConsent from "./Components/CookieConsent";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])
  
  let root = document.documentElement;

  return (
    <BrowserRouter>
      {loading ? (
        <div className={Styles.loader}>
          <Loader color={root.style.getPropertyValue('--Secondary')} size={15} />
        </div>
      ) : (
        <>
          <Helmet>
            <link rel="icon" href={icon} />
          </Helmet>
          <div className={Styles.stickyContainer}>
            <Nav />
            <DarkModeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dotnet-and-csharp" element={<Dotnetandcsharp />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <CookieConsent />
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}