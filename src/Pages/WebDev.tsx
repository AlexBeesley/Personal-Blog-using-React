import Style from '../Styles/pages.module.scss'
import Card from '../Components/card'
import CodeBox from '../Components/codebox'
import PageContents from '../Components/pagecontents'
import img1 from '../Images/personalWebsite.PNG'
import img2 from '../Images/darkmode.PNG'

export default function WebDev() {
  const titles = ['Overview', 'Basic HTML and CSS', 'Basic JavaScript', 'An introduction to React']
  return (
    <div>
      <div className={Style.title}>
        <h1 className={Style.mobileHeading}>Web Development</h1>
      </div>
      <PageContents titles={titles} links={titles} />
      <div className={Style.padding} />
      <a className={Style.anchor} id={titles[0]} />
      <Card title={titles[0]} blogpost={true}>
        <p>
          This section will cover front-end technologies, going over the basics
          of HTML, CSS and JavaScript, then taking a look at how this webapp was
          made using{' '}
          <a
            className={Style.inlineLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            title="What is React.js?"
          >
            React
          </a>{' '}
          with TypeScript, looking at the thrid-party{' '}
          <a
            className={Style.inlineLink}
            href="https://www.tutorialsteacher.com/nodejs/nodejs-modules#:~:text=Module%20in%20Node.,modules%20or%20pollute%20global%20scope."
            target="_blank"
            rel="noreferrer"
            title="What are node modules?"
          >
            node modules
          </a>{' '}
          used, testing and deployment. This section will touch on other
          JavaScript frameworks for web development such as{' '}
          <a
            className={Style.inlineLink}
            href="https://angular.io/"
            target="_blank"
            rel="noreferrer"
            title="What is Angular.js?"
          >
            Angular
          </a>
          ,{' '}
          <a
            className={Style.inlineLink}
            href="https://vuejs.org/"
            target="_blank"
            rel="noreferrer"
            title="What is Vue.js?"
          >
            Vue
          </a>{' '}
          and{' '}
          <a
            className={Style.inlineLink}
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            title="What is Next.js?"
          >
            Next
          </a>
          , and compare them to React.
        </p>
      </Card>
      <div className={Style.padding} />
      <a className={Style.anchor} id={titles[1]} />
      <Card title={titles[1]} blogpost={true}>
        <p>
          Hyper Text Markup Language (HTML) defines the structure of a website,
          using opening and closing tags to designate sections known as divs,
          some of which have been assigned special tag names with associated
          elements such as <code className={Style.inlineCode}>&lt;p&gt;</code>{' '}
          for paragraph, <code className={Style.inlineCode}>&lt;h1&gt;</code>{' '}
          for headings, <code className={Style.inlineCode}>&lt;body&gt;</code>{' '}
          and <code className={Style.inlineCode}>&lt;head&gt;</code> to separate
          content from metadata and even{' '}
          <code className={Style.inlineCode}>&lt;button&gt;</code> to enable
          user interactions, there is a full list of common HTML tags{' '}
          <a
            className={Style.inlineLink}
            href="https://www.w3schools.com/TAgs/default.asp"
            target="_blank"
            rel="noreferrer"
            title="What is Next.js?"
          >
            here
          </a>
          .
        </p>
        <p>
          A developer can assign tags attributes to describe behaviour while
          values as well as nested divs are provided between the opening and
          closing of tags; let’s like a look at some basic HTML from an example
          website I’ve put together. (Source Code available on GitHub{' '}
          <a
            className={Style.inlineLink}
            href="https://github.com/DABeesleyTPR/Personal_Website"
            target="_blank"
            rel="noreferrer"
            title="My persoanl website demo"
          >
            here
          </a>
          )
        </p>
        <CodeBox language={'html'}>{post1f1()}</CodeBox>
        <p>
          See how the nested structure enables complex structures to be defined
          without compromising on readability. Most tags in this example have
          both an id and class attribute, these are used to assign CSS values to
          them respectively.
        </p>
        <p>
          Cascading Style Sheets (CSS) is how front-end developers design their
          web products, it is a powerful tool to position, colour, animate and
          can change dynamically in response to user actions such as hovering.
          Modern CSS also enables{' '}
          <a
            className={Style.inlineLink}
            href="https://www.w3schools.com/css/css_rwd_intro.asp"
            target="_blank"
            rel="noreferrer"
            title="Responsive Web Design"
          >
            responsivity
          </a>
          , allowing users to access the same content from different devices
          with differing screen sizes and aspect ratios, developers can dictate
          what their site will look like on a mobile as opposed to how it is
          displayed on a desktop or even tablet.
        </p>
        <p>Here is the CSS for the example used</p>
        <CodeBox language={'css'}>{post1f2()}</CodeBox>
        <p>
          The <code className={Style.inlineCode}>.</code> prefix denotes classes
          while the <code className={Style.inlineCode}>#</code> denotes IDs.
          Once targeted, values can be assigned to attributes to dictate their
          look and behaviour in the website. Let’s see how this CSS file and the
          HTML above come together
        </p>
        <img
          src={img1}
          alt="personal website"
          title="personal website"
          className={Style.image}
        />
        <p className={Style.caption}>
          A screenshot of the demo site showcasing the HTML and CSS contained in
          this post.
        </p>
      </Card>
      <a className={Style.anchor} id={titles[2]} />
      <Card title={titles[2]} blogpost={true}>
        <p>
          JS is the most popular programming language, heavily used throughout
          the web, it is considered easy to learn, while being very capable,
          powerful and productive. In the above post, we looked at an example
          static site I created for this demo, the keen eyed among you will have
          noticed the JavaScript file loaded in the &lt;head&gt;, This is used
          to implement a dark mode when the toggle in switched.
        </p>
        <p>The following is the JavaScript code for this</p>
        <CodeBox language={'javascript'}>{post2f1()}</CodeBox>
        <p>
          In the <code className={Style.inlineCode}>toggleDarkMode()</code>{' '}
          function, elements within the document are targeted and their class
          names are changed, this automatically updates their CSS, pulling from
          the new class, containing the dark mode colour values.
        </p>
        <p>
          <code className={Style.inlineCode}>console.log()</code> is used widely
          in front-end development, during development and can be used to help
          debug issues, while in production logs can be used to give users extra
          information, perhaps as to why a certain JS element/function is not
          working as expected.
        </p>
        <img
          src={img2}
          alt="personal website: dark mode"
          title="personal website: dark mode"
          className={Style.image}
        />
        <p className={Style.caption}>
          A screenshot for the same website once dark mode has been toggled via
          the JavaScript function.
        </p>
      </Card>
      <a className={Style.anchor} id={titles[3]} />
      <Card title={titles[3]} blogpost={true}>

      </Card>
    </div>
  )
}

const post1f1 = () => {
  return `<!DOCTYPE html>
<html>
  <head>
      <title>Alexander Beesley</title>
      <meta charset="utf-8" name="Alexander Beesley">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="Scripts/script.js"></script>
      <link rel="stylesheet" href="CSS/Stylesheet.css">
  </head>
  
  <body>
      <header>
          <label class="dark-mode-toggle">
              <div class="toggle" id="dark-mode-toggle-light">
                  <input class="toggle-state" type="checkbox" name="check" value="check" onclick="toggleDarkMode()" />
                  <div class="indicator" id="indicator" alt="Toggle dark mode" title="Toggle dark mode"></div>
              </div>
          </label>
          <img src="Images/profile-pic.jpeg" alt="Alexander" title="Alexander" class="profile-pic" id="profile-pic">
          <h1 id="page-title">Alexander Beesley</h1>
          <h2 id="page-subtitle">
              Based in Brighton, a 21-year-old .NET Developer...
          </h2>
      </header>
      <main>
          <div class="row">
              <div class="col-1">
                  <article class="card animated animatedFadeInUp fadeInUp" id="aboutmecard">
                      <h3>About Me</h3>
                      <p>
                          I am a 21-year-old .NET Developer Intern for The Pensions Regulator...
                      </p>
                      <p>
                          What started as a hobby, my passion for photography has grown...
                      </p>
                  </article>
              </div>
. . .
      </main>
  </body>
</html>`
}

const post1f2 = () => {
  return `body {
    color: #fff;
    background-color: #8f96af;
    font-family: "Ubuntu", Helvetica, sans-serif;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 1rem;
    overflow: hidden;
  }
  
  .profile-pic {
    border-radius: 50%;
    max-width: 175px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    background: #8f96af;
    box-shadow: 20px 20px 60px #7a8095, -20px -20px 60px #a4adc9;
    position: inline;
  }
  
  #page-title,
  #page-subtitle {
    font-weight: bold;
    text-align: center;
    position: inline;
  }
  
  #page-subtitle {
    color: #fff;
    font-size: 24px;
  }
  
  h1,
  h2,
  h3 {
    font-weight: bold;
    position: inline;
    color: #55e2c4;
  }
  
  .card {
    border-radius: 50px;
    background: #8f96af;
    box-shadow: 20px 20px 60px #7a8095, -20px -20px 60px #a4adc9;
    padding: 1.5rem;
    margin: 1.5rem;
    box-sizing: border-box;
  }
  
  .card:hover {
    box-shadow:  20px 20px 60px #636879, -20px -20px 60px #bbc5e5;
  }`
}

const post2f1 = () => {
  return `console.log("JavaScript loaded");

  function toggleDarkMode() {
      document.body.classList.toggle("dark-mode-body");
      document.getElementById("profile-pic").classList.toggle("dark-mode-profile-pic");
      document.getElementById("aboutmecard").classList.toggle("dark-mode-card");
      document.getElementById("contactcard").classList.toggle("dark-mode-card");
      document.getElementById("photocard").classList.toggle("dark-mode-card");
      document.getElementById("timelinecard").classList.toggle("dark-mode-card");
      document.getElementById("dark-mode-toggle-light").classList.toggle("dark-mode-active-toggle");
      document.getElementById("indicator").classList.toggle("dark-mode-indicator");
      
      console.log("Dark Mode toggled");
  }`
}