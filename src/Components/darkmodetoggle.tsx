import { useEffect, useState } from "react";
import Styles from "../Styles/darkmodetoggle.module.scss";

export default function DarkModeToggle () {
  let data = window.localStorage.getItem('DARK_MODE_KEY')
  if (data !== null) {
    data = JSON.parse(data);
  }
  const [toggle, setToggle] = useState(
    () => data || false
  );
  
  useEffect(() => {
    window.localStorage.setItem('DARK_MODE_KEY', JSON.stringify(toggle));
  }, [toggle]);
  
  let root = document.documentElement;
  
  console.log("dark mode:", toggle);

  if (toggle) {
    root.style.setProperty('--Primary', '#9FACBD');
    root.style.setProperty('--Secondary', '#009AFA');
    root.style.setProperty('--Tertiary', '#8FC3F7');
    root.style.setProperty('--Accent', '#F9F871');
    root.style.setProperty('--background', '#00182e');
    root.style.setProperty('--shadow', '#000d18');
    root.style.setProperty('--highlight', '#002344');
    root.style.setProperty('--light', '#ffffff5d');
    root.style.setProperty('--light-hover', '#F9F871');
  }

  else {
    root.style.setProperty('--Primary', '#004D79');
    root.style.setProperty('--Secondary', '#002B53');
    root.style.setProperty('--Tertiary', '#009AFA');
    root.style.setProperty('--Accent', '#F9F871');
    root.style.setProperty('--background', '#8FC3F7');
    root.style.setProperty('--shadow', '#7aa6d2');
    root.style.setProperty('--highlight', '#a4e0ff');
    root.style.setProperty('--light', '#ffffff');
    root.style.setProperty('--light-hover', '#F9F871');
  }
  
  return (
    <div className={Styles.darkmodetoggle}>
      <button className={Styles.button} onClick={() => setToggle(!toggle)}>
        <i className="fa-solid fa-lightbulb"></i>
      </button>
    </div>
  );
}