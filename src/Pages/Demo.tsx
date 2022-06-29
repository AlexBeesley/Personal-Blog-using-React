import React, { useState } from "react";
import Styles from "../Styles/demo.module.scss";
import SpotifyPlayer from "./Demos/SpotifyPlayer"
import TechNewsRSS from "./Demos/TechNewsRSS"

export const Page2 = () => <h1>page 2</h1>;
export const Page3 = () => <h1>page 3</h1>;

export default function Demo() {
  const [page, setPage] = useState("Spotify Player");

  return (
    <>
      <div className={Styles.position}>
        <div className={Styles.container}>
          <button className={Styles.demobuttons} id={Styles.animate1} onClick={() => setPage("Spotify Player")}>Spotify Player</button>
          <button className={Styles.demobuttons} id={Styles.animate2} onClick={() => setPage("Tech News RSS")}>Tech News RSS</button>
          <button className={Styles.demobuttons} id={Styles.animate3} onClick={() => setPage("3")}>test 3</button>
        </div>
      </div>
      <h1 className={Styles.title}>{page}</h1>
      <RenderPage page={page} />
      <div className={Styles.push} />
    </>
  );
}

export const RenderPage = ({ page }) => {
  switch (page) {
    case "Spotify Player":
      return <SpotifyPlayer />;
    case "Tech News RSS":
      return <TechNewsRSS />;
    case "3":
      return <Page3 />;
    default:
      return <p>Starting point</p>;
  }
};