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

  if (toggle) {
    console.log("toggle dark mode");
    let root = document.documentElement;
    root.style.setProperty('--Secondary', '#827BAE');
    root.style.setProperty('--Tertiary', '#2C9676');
    root.style.setProperty('--Accent', '#F9F871');
    root.style.setProperty('--background', '#003236');
    root.style.setProperty('--shadow', '#002426');
    root.style.setProperty('--highlight', '#004146');
    root.style.setProperty('--light', '#ffffff5d');
    root.style.setProperty('--light-hover', '#F9F871');
  }
  else {
    console.log("toggle light mode");
    let root = document.documentElement;
    root.style.setProperty('--Secondary', '#004D54');
    root.style.setProperty('--Tertiary', '#00B1C4');
    root.style.setProperty('--Accent', '#67FBD1');
    root.style.setProperty('--background', '#B6B2F0');
    root.style.setProperty('--shadow', '#9b97cc');
    root.style.setProperty('--highlight', '#d1cdff');
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