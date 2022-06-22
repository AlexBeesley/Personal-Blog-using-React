import Styles from '../Styles/main.module.scss'
import Card from '../Components/card'

function Home() {
  return (
    <div>
      <div className={Styles.title}>
        <h1>Alexander Beesley</h1>
        <h3>
          I'm a full-stack developer with a passion for learning and a love for
          the web.
        </h3>
      </div>
      <div className={Styles.row}>
        <div className={Styles.col1}>
          <Card title="Overview">
            <p>
              This is Single-Page Application (SPA) that I built using React.js and TypeScript. With Visual 
              Studio Code as my IDE, I have built this application from scratch, using the latest React version and 
              TypeScript features with Webpack, Babble and Eslint integration.
            </p>
            <p>
              React was chosen as it is a popular framework for building web applications, developed by Facebook, 
              it has since been made open-source and is used by many other companies. The Facebook software engineer who built 
              the platform, Jordan Walke, was influenced by XHP, an HTML component library for PHP. It was first developed for 
              Facebook's News Feed, in 2011.
            </p>
            <p>
              Typescript is a superset of JavaScript and is used to write more robust, maintainable code. As it allows 
              for strongly typed variable declarations, it is a powerful tool for building large-scale applications. Note, all 
              TypeScript code is transpiled to JavaScript before it is then compiled and run, perfect for traditional C# Developers 
              used to working with strong types, which brings inherent validation across board.
            </p>
          </Card>
        </div>
        <div className={Styles.col2}>
          <Card title="About me">
            <p>
              I am a 21-year-old .NET Developer Intern for The Pensions Regulator. I am a self-taught programmer, 
              with a passion for new and emerging technologies. My interest in computing stems from the age of 12, when my 
              parents brought me one of the very first editions Raspberry Pi Model B which came out in February 2012, which 
              came in a box signed by The Raspberry Pi Foundation’s CEO and founder, David Breben. On this early edition there 
              was little support at the time and even getting it to boot off a SD Card preloaded with Raspbian (a Flavour of 
              Linux for the Pi based on the Debian distro) and then learning the basics of Linux to get the most out of my 
              Pi was a challenge for a 12-year-old, but one that I enjoyed deeply and which inspired the direction of my 
              academic career in the following years.
            </p>
            <p>
              Fast-forward to 2016, I had taught myself basic Python and had touched on HTML, CSS and basic web 
              development. Achieving an A grade in GCSE Computer Science, I wanted to focus fully on my passion and took a 
              BTEC in IT, the following year, where I developed an interest in Artificial Intelligence and Machine Learning. 
              Inspired by this cutting-edge technology with seemingly infinite potential it made sense to me to pursue 
              Computer Science with AI at Brighton University. During my 2 years of University, I have deepened my understanding 
              of computing principles such as Binary Logic, Data Representation, Networking, the Software Development Cycle and 
              Cybersecurity while learning technologies like Java, Tensorflow and SQL.
            </p>
            <p>
            Before returning for my finally year, I choose to do a year placement with The Pensions Regulator, as a 
            .NET Developer and DevOps Specialist. During this placement, I have learnt and developed in widely used industry 
            technologies such as .NET APIs and MVCs, C# unit and integration testing, JavaScript/TypeScript, React and have 
            familiarised myself with both Sitecore and Umbraco. Wile following an Agile workflow within my team, using 
            Azure DevOps to track work items using Kanban, covering Git extensively with peer reviewed Pull Requests, touching 
            on Azure Pipelines, CI/CD Deployments and Docker containers.
            </p>
          </Card>
        </div>
        <div className={Styles.push}></div>
      </div>
    </div>
  )
}

export default Home
