import Styles from "./darkmodetoggle.module.scss";
import { FunctionComponent, useState } from "react";

export default function DarkModeToggle () {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={Styles.darkmodetoggle}>
      <div className={Styles.toggle}>
          <input className={Styles.toggleState} type="checkbox" name="check" value="check" onClick={toggleDarkMode} />
          <div className={Styles.indicator} title="Toggle dark mode"></div>
      </div>
    </label>
    );
}

let toggle = true;

export function toggleDarkMode() {
  if (toggle) {
    console.log("toggle dark mode");
    let root = document.documentElement;
    root.style.setProperty('--Secondary', '#827BAE');
    root.style.setProperty('--Tertiary', '#2C9676');
    root.style.setProperty('--Accent', '#F9F871');
    root.style.setProperty('--background', '#004D54');
    root.style.setProperty('--shadow', '#004147');
    root.style.setProperty('--highlight', '#005961');
    root.style.setProperty('--shadow-focus', '#025961');
    root.style.setProperty('--highlight-focus', '#036c75');
    toggle = false;
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
    root.style.setProperty('--shadow-focus', '#8986b4');
    root.style.setProperty('--highlight-focus', '#e4dfff');
    toggle = true;
  }
}