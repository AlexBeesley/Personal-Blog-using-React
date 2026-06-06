import Styles from '../Styles/main.module.scss'
import Card from '../Components/card'

function Home() {
  return (
    <>
      <div className={Styles.title}>
        <h1>Alexander Beesley</h1>
        <h3>
          Full Stack Developer specialising in .NET, Sitecore/Umbraco,
          JavaScript based frameworks and DevOps.
        </h3>
      </div>
      <div className={Styles.row}>
        <div className={Styles.col1}>
          <Card title="Overview">
            <p>
              This is a{' '}
              <a
                className={Styles.inlineLink}
                href="https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application"
                target="_blank"
                title="What is a single page application and why do people like them so much?"
              >
                Single-Page Application
              </a>{' '}
              (SPA) that I built using{' '}
              <a
                className={Styles.inlineLink}
                href="https://reactjs.org/"
                target="_blank"
                title="What is React.js?"
              >
                React.js
              </a>{' '}
              and{' '}
              <a
                className={Styles.inlineLink}
                href="https://www.typescriptlang.org/"
                target="_blank"
                title="What is TypeScript?"
              >
                TypeScript
              </a>
              . With{' '}
              <a
                className={Styles.inlineLink}
                href="https://code.visualstudio.com/"
                target="_blank"
                title="Download VS Code"
              >
                Visual Studio Code
              </a>{' '}
              as my IDE, I have built this application from scratch, using the
              latest React version and TypeScript features with{' '}
              <a
                className={Styles.inlineLink}
                href="https://webpack.js.org/"
                target="_blank"
                title="What is Webpack?"
              >
                Webpack
              </a>
              ,{' '}
              <a
                className={Styles.inlineLink}
                href="https://babeljs.io/docs/en/"
                target="_blank"
                title="What is Babel?"
              >
                Babel
              </a>{' '}
              and{' '}
              <a
                className={Styles.inlineLink}
                href="https://eslint.org/"
                target="_blank"
                title="What is ESLint?"
              >
                ESLint
              </a>{' '}
              integration. Whilst this project is bundled with Webpack, the
              React ecosystem has since largely consolidated around{' '}
              <a
                className={Styles.inlineLink}
                href="https://vitejs.dev/"
                target="_blank"
                title="What is Vite?"
              >
                Vite
              </a>{' '}
              for its faster builds and simpler configuration, which is what I
              would now reach for on a new project.
            </p>
            <p>
              React was chosen as it is a popular library for building web
              applications, developed by{' '}
              <a
                className={Styles.inlineLink}
                href="https://about.meta.com/"
                target="_blank"
                title="Meta (formerly Facebook)"
              >
                Meta
              </a>{' '}
              (formerly Facebook). It has since been made open-source and is
              used by many other companies. The Meta software engineer who built
              the platform, Jordan Walke, was influenced by{' '}
              <a
                className={Styles.inlineLink}
                href="https://en.wikipedia.org/wiki/XHP"
                target="_blank"
                title="XHP on Wikipedia"
              >
                XHP
              </a>
              , an HTML component library for PHP. It was first developed for
              Facebook's News Feed, in 2011.
            </p>
            <p>
              Typescript is a superset of{' '}
              <a
                className={Styles.inlineLink}
                href="https://www.javascript.com/"
                target="_blank"
                title="Learn JavaScript"
              >
                JavaScript
              </a>{' '}
              and is used to write more robust, maintainable code. As it allows
              for{' '}
              <a
                className={Styles.inlineLink}
                href="https://www.techtarget.com/whatis/definition/strongly-typed#:~:text=A%20strongly%20typed%20programming%20language%20is%20one%20in%20which%20each,one%20of%20the%20data%20types."
                target="_blank"
                title="What is a strongly typed programming language?"
              >
                strongly typed
              </a>{' '}
              variable declarations, it is a powerful tool for building
              large-scale applications. Note, all TypeScript code is transpiled
              to JavaScript before it is then compiled and run, perfect for
              traditional C# Developers used to work with strong types, which
              brings inherent{' '}
              <a
                className={Styles.inlineLink}
                href="https://www.bbc.co.uk/bitesize/guides/zdvrd2p/revision/1"
                target="_blank"
                title="Data validation and verification"
              >
                validation
              </a>{' '}
              across board.
            </p>
          </Card>
        </div>
        <div className={Styles.col2}>
          <Card title="About me">
            <p>
              I am a .NET Developer at <a className={Styles.inlineLink} href="https://www.thepensionsregulator.gov.uk/" target="_blank" title="TPR">The Pensions Regulator</a>. As a largely self-taught programmer, I have a passion for new and emerging technologies. My interest in computing began at the age of 12 when my parents gifted me one of the very first editions of the <a className={Styles.inlineLink} href="https://www.raspberrypi.org/" target="_blank" title="What is a Raspberry Pi?">Raspberry Pi</a>, which came out in February 2012. My board was signed by Raspberry Pi Foundation co-founder David Braben. At that time, there was limited support for the device, and even getting it to boot off an SD Card preloaded with Raspbian, a Linux flavour for the Pi based on the Debian distro, was a challenge for a 12-year-old. However, I embraced the challenge and enjoyed delving into the basics of Linux to make the most out of my Pi. This experience deeply inspired the direction of my academic career in the following years.
            </p>
            <p>
              In 2016, I taught myself basic Python and dabbled in HTML, CSS, and basic web development. I achieved an A grade in GCSE Computer Science and decided to fully focus on my passion. The following year, I pursued a BTEC in IT, during which I developed a strong interest in Artificial Intelligence and Machine Learning. The seemingly infinite potential of these cutting-edge technologies captivated me, and I decided to pursue a degree in <a className={Styles.inlineLink} href="https://www.brighton.ac.uk/courses/study/computer-science-with-artificial-intelligence-bsc-hons.aspx" target="_blank" title="Course overview">Computer Science with AI at Brighton University</a>. Over the early years of my degree, I deepened my understanding of fundamental computing principles such as Binary Logic, Data Representation, Networking, the Software Development Cycle, and Cybersecurity. I also gained hands-on experience with technologies like Java, <a className={Styles.inlineLink} href="https://www.tensorflow.org/" target="_blank" title="What is TensorFlow?">TensorFlow</a>, and SQL.
            </p>
            <p>
              Before returning for my final year, I embarked on a year-long placement with The Pensions Regulator as a .NET Developer and <a className={Styles.inlineLink} href="https://about.gitlab.com/topics/devops/" target="_blank" title="What is DevOps?">DevOps</a> Specialist. During this placement I honed my skills and gained proficiency in widely-used industry technologies such as .NET APIs and MVCs, C# unit and integration testing, JavaScript/TypeScript, and React. I also familiarised myself with both <a className={Styles.inlineLink} href="https://www.sitecore.com/" target="_blank" title="What is Sitecore?">Sitecore</a> and <a className={Styles.inlineLink} href="https://umbraco.com/" target="_blank" title="What is Umbraco?">Umbraco</a>. While following an Agile workflow within my team, using Azure DevOps to track work items using Kanban, covering Git extensively with peer-reviewed Pull Requests, touching on <a className={Styles.inlineLink} href="https://azure.microsoft.com/en-gb/" target="_blank" title="What is Azure?">Azure</a> Pipelines, CI/CD Deployments, and <a className={Styles.inlineLink} href="https://www.docker.com/" target="_blank" title="What is Docker?">Docker</a> containers. Since graduating, I have continued to build on that foundation as a .NET Developer, and I am now actively expanding into the areas shaping the industry in 2026 — cloud-native development, Infrastructure as Code, and the practical application of Generative AI and Large Language Models to everyday engineering.
            </p>
          </Card>
        </div>
        <div className={Styles.push} />
      </div>
    </>
  )
}

export default Home
