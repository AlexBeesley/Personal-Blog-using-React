import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import Card from '../Components/card'
import Icon from '../Components/Icons'
import Styles from '../Styles/home.module.css'
import { attachPointerLight } from '../Utilities/ambient'
import { author, siteName, topics } from '../Utilities/site'

function Home() {
  const shelvesRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (shelvesRef.current) return attachPointerLight(shelvesRef.current)
  }, [])

  return (
    <>
      <title>{`${siteName} · Full Stack Developer`}</title>
      <header className={Styles.hero}>
        <p className="eyebrow">Hello, I&rsquo;m</p>
        <h1 className={`display is-writing ${Styles.name}`}>{author}</h1>
        <p className={Styles.lede}>
          Full Stack Developer specialising in .NET, Sitecore/Umbraco,
          JavaScript based frameworks and DevOps.
        </p>
      </header>

      <section className={Styles.explore} aria-labelledby="explore-title">
        <h2 id="explore-title" className={`eyebrow ${Styles.exploreTitle}`}>
          Explore the log
        </h2>
        {/* The dashboard's shelves: one glass pane per topic, rims lit and
            tipped toward the pointer. */}
        <ul ref={shelvesRef} className={Styles.shelves}>
          {topics.map(({ path, label, icon, summary }) => (
            <li key={path} className={`lg lg--lift ${Styles.shelf}`}>
              <Link to={path} className={Styles.shelfLink}>
                <span className={Styles.plate} aria-hidden="true">
                  <Icon name={icon} size={26} />
                </span>
                <span className={Styles.shelfTitle}>{label}</span>
                <span className={Styles.summary}>{summary}</span>
                <span className={Styles.go} aria-hidden="true">
                  Read <Icon name="arrow" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className={Styles.cards}>
        <Card title="Overview">
          <p>
            This is a{' '}
            <a
              href="https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application"
              target="_blank"
              rel="noreferrer"
              title="What is a single page application and why do people like them so much?"
            >
              Single-Page Application
            </a>{' '}
            (SPA) that I built using{' '}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              title="What is React.js?"
            >
              React.js
            </a>{' '}
            and{' '}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              title="What is TypeScript?"
            >
              TypeScript
            </a>
            . With{' '}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
              title="Download VS Code"
            >
              Visual Studio Code
            </a>{' '}
            as my IDE, I have built this application from scratch, using the
            latest React version and TypeScript features. It began life
            bundled with{' '}
            <a
              href="https://webpack.js.org/"
              target="_blank"
              rel="noreferrer"
              title="What is Webpack?"
            >
              Webpack
            </a>{' '}
            and{' '}
            <a
              href="https://babeljs.io/docs/en/"
              target="_blank"
              rel="noreferrer"
              title="What is Babel?"
            >
              Babel
            </a>
            ; as the React ecosystem consolidated around{' '}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noreferrer"
              title="What is Vite?"
            >
              Vite
            </a>{' '}
            for its faster builds and simpler configuration, the project moved
            over to it, with{' '}
            <a
              href="https://eslint.org/"
              target="_blank"
              rel="noreferrer"
              title="What is ESLint?"
            >
              ESLint
            </a>{' '}
            and Vitest keeping the code honest.
          </p>
          <p>
            React was chosen as it is a popular library for building web
            applications, developed by{' '}
            <a
              href="https://about.meta.com/"
              target="_blank"
              rel="noreferrer"
              title="Meta (formerly Facebook)"
            >
              Meta
            </a>{' '}
            (formerly Facebook). It has since been made open-source and is
            used by many other companies. The Meta software engineer who built
            the platform, Jordan Walke, was influenced by{' '}
            <a
              href="https://en.wikipedia.org/wiki/XHP"
              target="_blank"
              rel="noreferrer"
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
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
              title="Learn JavaScript"
            >
              JavaScript
            </a>{' '}
            and is used to write more robust, maintainable code. As it allows
            for{' '}
            <a
              href="https://www.techtarget.com/whatis/definition/strongly-typed#:~:text=A%20strongly%20typed%20programming%20language%20is%20one%20in%20which%20each,one%20of%20the%20data%20types."
              target="_blank"
              rel="noreferrer"
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
              href="https://www.bbc.co.uk/bitesize/guides/zdvrd2p/revision/1"
              target="_blank"
              rel="noreferrer"
              title="Data validation and verification"
            >
              validation
            </a>{' '}
            across board.
          </p>
        </Card>
        <Card title="About me">
          <p>
            I am a .NET Developer at <a href="https://www.thepensionsregulator.gov.uk/" target="_blank"
              rel="noreferrer" title="TPR">The Pensions Regulator</a>. As a largely self-taught programmer, I have a passion for new and emerging technologies. My interest in computing began at the age of 12 when my parents gifted me one of the very first editions of the <a href="https://www.raspberrypi.org/" target="_blank"
              rel="noreferrer" title="What is a Raspberry Pi?">Raspberry Pi</a>, which came out in February 2012. My board was signed by Raspberry Pi Foundation co-founder David Braben. At that time, there was limited support for the device, and even getting it to boot off an SD Card preloaded with Raspbian, a Linux flavour for the Pi based on the Debian distro, was a challenge for a 12-year-old. However, I embraced the challenge and enjoyed delving into the basics of Linux to make the most out of my Pi. This experience deeply inspired the direction of my academic career in the following years.
          </p>
          <p>
            In 2016, I taught myself basic Python and dabbled in HTML, CSS, and basic web development. I achieved an A grade in GCSE Computer Science and decided to fully focus on my passion. The following year, I pursued a BTEC in IT, during which I developed a strong interest in Artificial Intelligence and Machine Learning. The seemingly infinite potential of these cutting-edge technologies captivated me, and I decided to pursue a degree in <a href="https://www.brighton.ac.uk/courses/study/computer-science-with-artificial-intelligence-bsc-hons.aspx" target="_blank"
              rel="noreferrer" title="Course overview">Computer Science with AI at Brighton University</a>. Over the early years of my degree, I deepened my understanding of fundamental computing principles such as Binary Logic, Data Representation, Networking, the Software Development Cycle, and Cybersecurity. I also gained hands-on experience with technologies like Java, <a href="https://www.tensorflow.org/" target="_blank"
              rel="noreferrer" title="What is TensorFlow?">TensorFlow</a>, and SQL.
          </p>
          <p>
            Before returning for my final year, I embarked on a year-long placement with The Pensions Regulator as a .NET Developer and <a href="https://about.gitlab.com/topics/devops/" target="_blank"
              rel="noreferrer" title="What is DevOps?">DevOps</a> Specialist. During this placement I honed my skills and gained proficiency in widely-used industry technologies such as .NET APIs and MVCs, C# unit and integration testing, JavaScript/TypeScript, and React. I also familiarised myself with both <a href="https://www.sitecore.com/" target="_blank"
              rel="noreferrer" title="What is Sitecore?">Sitecore</a> and <a href="https://umbraco.com/" target="_blank"
              rel="noreferrer" title="What is Umbraco?">Umbraco</a>. While following an Agile workflow within my team, using Azure DevOps to track work items using Kanban, covering Git extensively with peer-reviewed Pull Requests, touching on <a href="https://azure.microsoft.com/en-gb/" target="_blank"
              rel="noreferrer" title="What is Azure?">Azure</a> Pipelines, CI/CD Deployments, and <a href="https://www.docker.com/" target="_blank"
              rel="noreferrer" title="What is Docker?">Docker</a> containers. Since graduating, I have continued to build on that foundation as a .NET Developer, and I am now actively expanding into the areas shaping the industry in 2026 — cloud-native development, Infrastructure as Code, and the practical application of Generative AI and Large Language Models to everyday engineering.
          </p>
        </Card>
      </div>
    </>
  )
}

export default Home
