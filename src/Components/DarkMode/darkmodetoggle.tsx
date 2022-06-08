import Styles from "./darkmodetoggle.module.scss";

export default function DarkModeToggle () {
  return (
    <div className={Styles.darkmodetoggle}>
      <button className={Styles.button} onClick={toggleDarkMode}>
        <i className="fa-solid fa-lightbulb"></i>
      </button>
    </div>
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
    root.style.setProperty('--background', '#003236');
    root.style.setProperty('--shadow', '#002426');
    root.style.setProperty('--highlight', '#004146');
    root.style.setProperty('--shadow-focus', '#003236');
    root.style.setProperty('--highlight-focus', '#003236');
    root.style.setProperty('--light', '#ffffff5d');
    root.style.setProperty('--light-hover', '#F9F871');
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
    root.style.setProperty('--shadow-focus', '#B6B2F0');
    root.style.setProperty('--highlight-focus', '#B6B2F0');
    root.style.setProperty('--light', '#ffffff');
    root.style.setProperty('--light-hover', '#F9F871');
    toggle = true;
  }
}