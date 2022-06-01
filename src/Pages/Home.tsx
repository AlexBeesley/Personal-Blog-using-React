import React from "react";
import Styles from "../Styles/main.module.scss";
import { Card } from '../Components/Cards/card';

function Home() {
  return (
    <div>
      <h1>Alexander Beesley</h1>
      <p>
        I'm a full-stack developer with a passion for learning and a love for
        the web.
      </p>
      <div className={Styles.row}>
        <div className={Styles.col1}>
        < Card 
          title="Overview"
          paragraph1="This is Single-Page Application (SPA) that I built using React.js and TypeScript.
          Using Visual Studio Code as my IDE, I have built this application from scratch, using the latest
          React version and TypeScript features."
          paragraph2="React was chosen as it is a popular framework for building web applications, developed by 
          Facebook, and is used by many other companies. The Facebook software engineer who built the 
          platform, Jordan Walke, was influenced by XHP, an HTML component library for PHP. It was first developed on
          Facebook's News Feed, in 2011."
          paragraph3="Typescript is a superset of JavaScript, and is used to write more robust, maintainable code. 
          As it allows for srongly typed code, it is a powerful tool for building large-scale applications. Note, all 
          TypeScript code is transpiled to JavaScript before it is then compiled and run."
          expandable={false} >
          </Card>
        </div>
        <div className={Styles.col2}>
        < Card 
          title="About me"
          paragraph1="I am a 21-year-old .NET Developer Intern for The Pensions
          Regulator. I am currently working on a project to create a website
          for The Pensions Regulator. I am a self-taught programmer and I
          have a passion for learning new technologies and languages. I am
          currently learning C# and JavaScript. I am also a student at the
          University of Brighton, studying Computer Science with Artificial
          Intelligence."
          paragraph2="[more about me here]"
          expandable={false} />
        </div>
        <div className={Styles.col3}>
        </div>
      </div>
    </div>
  );
}

export default Home;