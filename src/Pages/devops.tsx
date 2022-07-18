import Style from '../Styles/pages.module.scss'
import Card from '../Components/card'
import CodeBox from '../Components/codebox'
import PageContents from '../Components/pagecontents'
import img1 from '../Images/agile.png'

export default function DevOps() {
  const titles = ['Overview', 'Agile Working', 'Azure']
  return (
    <div>
      <div className={Style.title}>
        <h1 className={Style.mobileHeading}>DevOps</h1>
      </div>
      <PageContents titles={titles} links={titles} />
      <div className={Style.padding} />
      <a className={Style.anchor} id={titles[0]} />
      <Card title={titles[0]} blogpost={true}>
        <p>
          <a
            className={Style.inlineLink}
            href="https://www.delphix.com/glossary/what-is-dev-ops-model"
            target="_blank"
            rel="noreferrer"
            title="What is DevOps?"
          >
            Developer Operations
          </a>{' '}
          (DevOps) refers to the combination of development-orientated project
          management focused on delivery. It is a wide bracket which encompasses
          and governs{' '}
          <a
            className={Style.inlineLink}
            href="https://www.ibm.com/uk-en/topics/software-development"
            target="_blank"
            rel="noreferrer"
            title="What is Software Development?"
          >
            software development
          </a>{' '}
          and{' '}
          <a
            className={Style.inlineLink}
            href="https://www.sumologic.com/glossary/software-deployment/"
            target="_blank"
            rel="noreferrer"
            title="What is Software Deployment?"
          >
            deployment
          </a>
          , offering a management infrastructure which sees business
          requirements met with the developer's ability to produce products and
          articles in a{' '}
          <a
            className={Style.inlineLink}
            href="https://en.wikipedia.org/wiki/Software_as_a_service"
            target="_blank"
            rel="noreferrer"
            title="What is the SaaS model?"
          >
            software-as-a-service
          </a>{' '}
          (SaaS) model.
        </p>
      </Card>
      <a className={Style.anchor} id={titles[1]} />
      <Card title={titles[1]} blogpost={true}>
        <p>
          <a
            className={Style.inlineLink}
            href="https://www.atlassian.com/agile#:~:text=Agile%20is%20an%20iterative%20approach,small%2C%20but%20consumable%2C%20increments."
            target="_blank"
            rel="noreferrer"
            title="What is Agile?"
          >
            Agile
          </a>{' '}
          is a project management method, which is focused on delivering value
          often, in time and on or below budget, the philosophe is built on{' '}
          <a
            className={Style.inlineLink}
            href="https://agilemanifesto.org/"
            target="_blank"
            rel="noreferrer"
            title="Manifesto for Agile Software Development"
          >
            The Agile Manifesto
          </a>
          , which was produced in 2000 when a group of 17 developers came
          together, in the US, Oregon, to speed up development times. Since its
          conception, it has fast become the status quo of software development
          teams across many industries.
        </p>
        <p>
          In an agile team,{' '}
          <a
            className={Style.inlineLink}
            href="https://www.atlassian.com/agile/kanban/boards#:~:text=A%20kanban%20board%20is%20an,order%20in%20their%20daily%20work."
            target="_blank"
            rel="noreferrer"
            title="What is a kanban board?"
          >
            Kanban Boards
          </a>{' '}
          are used to track user stories (work items) through the development
          process, from story development and analysis through to development,
          testing and finally deployment, the board allows a software
          development team to stay on top of their work and estimate development
          time.
        </p>
        <img src={img1} />
        <p className={Style.caption}>
          Agile methodologies: user stories drive everything.
        </p>
        <p>
          A{' '}
          <a
            className={Style.inlineLink}
            href="https://www.atlassian.com/agile/scrum/sprints"
            target="_blank"
            rel="noreferrer"
            title="Scrum Sprints"
          >
            sprint
          </a>{' '}
          is a period within agile used to reach short-term goals while working
          towards long-term aspirations, a sprint typically lasts between three
          and four weeks depending on the team and will have one overarching
          focus with clearly defined deliverables.
        </p>
        <p>
          A sprint typically begins with a{' '}
          <a
            className={Style.inlineLink}
            href="https://www.agilealliance.org/glossary/backlog-refinement/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_glossary~'aa_organizations~'aa_research_paper~'aa_video)~tags~(~'backlog*20refinement))~searchTerm~'~sort~false~sortDirection~'asc~page~1)"
            target="_blank"
            rel="noreferrer"
            title="What is Backlog Refinement?"
          >
            backlog refinement
          </a>{' '}
          session where the team curate the user stories that will be worked on
          throughout the sprint, at the end of a sprint a team may have a{' '}
          <a
            className={Style.inlineLink}
            href="https://www.scrum.org/resources/what-is-a-sprint-retrospective"
            target="_blank"
            rel="noreferrer"
            title="What is a Sprint Retrospective?"
          >
            retrospective
          </a>{' '}
          to discuss improvement strategies to implement in the next sprint.
        </p>
      </Card>
      <a className={Style.anchor} id={titles[2]} />
      <Card title={titles[2]} blogpost={true}>
        <p>
          Microsoft’s{' '}
          <a
            className={Style.inlineLink}
            href="https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-azure/"
            target="_blank"
            rel="noreferrer"
            title="What is a Microsoft Azure Cloud Computing?"
          >
            Azure
          </a>{' '}
          is one of the three big players in the cloud platforming space,
          competing with{' '}
          <a
            className={Style.inlineLink}
            href="https://aws.amazon.com/what-is-aws/"
            target="_blank"
            rel="noreferrer"
            title="What is a AWS?"
          >
            Amazon Web Services
          </a>{' '}
          (AWS) and{' '}
          <a
            className={Style.inlineLink}
            href="https://cloud.google.com/docs/overview"
            target="_blank"
            rel="noreferrer"
            title="Google Cloud Overview"
          >
            Google Cloud
          </a>
          . All three offer a suite of tools to aid a development team through
          the development cycle as well as offering hosting services for a
          multitude of products, including git repositories, app services,
          domains, analytics, user authentication, virtualisation and even
          machine learning capabilities baked in.
        </p>
        <p>
          Azure uses pipelines, written as{' '}
          <code className={Style.inlineCode}>.YAML</code> files, to set up{' '}
          <a
            className={Style.inlineLink}
            href="https://www.redhat.com/en/topics/devops/what-is-ci-cd"
            target="_blank"
            rel="noreferrer"
            title="What is CI/CD?"
          >
            continuous integrations/continuous deployment
          </a>{' '}
          (CI/CD) workflows which automate testing and deployment processes.
        </p>
        <p>
          Here is an example of a pipeline setup to test, build and deploy the
          Pay Calculator .NET MVC application.
        </p>
        <CodeBox language={'yaml'}>{post2f1()}</CodeBox>
        <p>
          This YAML document sets out the steps recognized by azure, telling it
          to run each time a commit is made to the{' '}
          <code className={Style.inlineCode}>/develop</code> or{' '}
          <code className={Style.inlineCode}>/feature/*</code>{' '}
          branches and the proceeds to build the .NET 6 MVC, run its associated
          tests, if the tests pass, it proceeds to deploy the MVC via the{' '}
          <code className={Style.inlineCode}>app-uks-dev-01</code> app service.
        </p>
      </Card>
    </div>
  )
}

const post2f1 = () => {
  return `trigger:
- develop
- feature/*

pool:
  vmImage: 'windows-2022'

variables:
  WDir: 'MVC'
  solution: '**/*.sln'
  buildPlatform: 'Any CPU'
  buildConfiguration: 'Release'

steps:
- task: NuGetToolInstaller@1

- task: NuGetCommand@2
  inputs:
    restoreSolution: '$(solution)'

- powershell: |
    dotnet tool install --global dotnet-ef
    
    $content = gc .\appsettings.json -raw | ConvertFrom-Json
    $content.ConnectionStrings.DefaultConnection=$(SQLDevDbConnString)
    $content | ConvertTo-Json | Set-Content .\appsettings.json
    
    dotnet ef database update $(Initial_Create)
  workingDirectory: '$(WDir)'
  displayName: 'PowerShell Script for EFcore'

- task: VSBuild@1
  inputs:
    solution: '$(solution)'
    platform: '$(buildPlatform)'
    configuration: '$(buildConfiguration)'

- task: VSTest@2
  inputs:
    platform: '$(buildPlatform)'
    configuration: '$(buildConfiguration)'

- task: AzureRmWebAppDeployment@4
  displayName: Deploy Mvc Web App
  inputs:
      ConnectionType: AzureRM
      azureSubscription: IT-SBX           
      appType: webApp
      WebAppName: app-uks-dev-01
      Package: '$(Build.ArtifactStagingDirectory)\WebApp.zip'`
}
