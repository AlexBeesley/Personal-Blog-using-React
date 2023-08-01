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
    root.style.setProperty('--Primary', '#d6d2c4'); 
    root.style.setProperty('--Secondary', '#63807D');
    root.style.setProperty('--Tertiary', '#d6d2c4');
    root.style.setProperty('--Quaternary', '#FBF1CA');
    root.style.setProperty('--Accent', '#00755F');
    root.style.setProperty('--background', '#003b49');
    root.style.setProperty('--shadow', '#001f29'); 
    root.style.setProperty('--highlight', '#002939');
    root.style.setProperty('--light', '#d6d2c4');
    root.style.setProperty('--light-hover', '#F9F871');
  }

  else {
    root.style.setProperty('--Primary', '#003b49');
    root.style.setProperty('--Secondary', '#003b49');  
    root.style.setProperty('--Tertiary', '#003b49');
    root.style.setProperty('--Quaternary', '#006269');
    root.style.setProperty('--Accent', '#50B37B');
    root.style.setProperty('--background', '#d6d2c4');
    root.style.setProperty('--shadow', '#b6b3a7');
    root.style.setProperty('--highlight', '#f6f2e1');
    root.style.setProperty('--light', '#003b49');
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