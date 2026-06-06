import { useEffect, useState } from "react";
import Styles from "../Styles/darkmodetoggle.module.scss";

const darkTheme = {
  '--Primary': '#d6d2c4',
  '--Secondary': '#63807D',
  '--Tertiary': '#d6d2c4',
  '--Quaternary': '#FBF1CA',
  '--Accent': '#00755F',
  '--background': '#003b49',
  '--shadow': '#001f29',
  '--highlight': '#002939',
  '--light': '#d6d2c4',
  '--light-hover': '#F9F871',
};

const lightTheme = {
  '--Primary': '#003b49',
  '--Secondary': '#003b49',
  '--Tertiary': '#003b49',
  '--Quaternary': '#006269',
  '--Accent': '#50B37B',
  '--background': '#d6d2c4',
  '--shadow': '#b6b3a7',
  '--highlight': '#f6f2e1',
  '--light': '#003b49',
  '--light-hover': '#F9F871',
};

export default function DarkModeToggle () {
  const [toggle, setToggle] = useState(() => {
    const data = window.localStorage.getItem('DARK_MODE_KEY');
    return data !== null ? JSON.parse(data) : true;
  });

  useEffect(() => {
    window.localStorage.setItem('DARK_MODE_KEY', JSON.stringify(toggle));
  }, [toggle]);

  useEffect(() => {
    const root = document.documentElement;
    const theme = toggle ? darkTheme : lightTheme;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [toggle]);

  return (
    <div className={Styles.darkmodetoggle}>
      <button className={Styles.button} onClick={() => setToggle(!toggle)} aria-label={`Switch to ${toggle ? 'light' : 'dark'} mode`}>
        <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
      </button>
    </div>
  );
}