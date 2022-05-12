import React from "react";

function Home() {
  return (
    <div>
      <h1>Alexander Beesley</h1>
      <p>
        I'm a full-stack developer with a passion for learning and a love for
        the web.
      </p>
      <div className="row">
        <div className="col-1">
          <article className="card" id="aboutmecard">
            <h3>About Me</h3>
            <p>
              I am a 21-year-old .NET Developer Intern for The Pensions
              Regulator. I am currently working on a project to create a website
              for The Pensions Regulator. I am a self-taught programmer and I
              have a passion for learning new technologies and languages. I am
              currently learning C# and JavaScript. I am also a student at the
              University of Brighton, studing Computer Science with Artificial
              Intelligence.
            </p>
            <p>
              What started as a hobby, my passion for photography has grown into
              freelance work I undertake around Brighton, having done work for
              the Brighton Female Skate Collective and for some of my friends
              who study fashion.
            </p>
          </article>
        </div>
        <div className="col-2">
          <article className="card" id="photocard">
            <h3>My Photography</h3>
          </article>
        </div>
        <div className="col-3">
          <article className="card" id="timelinecard">
            <h3>Timeline</h3>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Home;