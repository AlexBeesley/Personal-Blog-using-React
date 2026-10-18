import Card from '../Components/card'
import Figure from '../Components/Figure'
import CodeBox from '../Components/codebox'
import Post from '../Components/Post'
import img1 from '../Images/agile.webp'

export default function DevOps() {
  const titles = ['Overview', 'Agile Working', 'Azure']

  return (
    <Post title="DevOps" sections={titles}>
      <Card title={titles[0]} blogpost={true}>
        <p>
          <a
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
            href="https://www.ibm.com/uk-en/topics/software-development"
            target="_blank"
            rel="noreferrer"
            title="What is Software Development?"
          >
            software development
          </a>{' '}
          and{' '}
          <a
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
            href="https://en.wikipedia.org/wiki/Software_as_a_service"
            target="_blank"
            rel="noreferrer"
            title="What is the SaaS model?"
          >
            software-as-a-service
          </a>{' '}
          (SaaS) model.
        </p>
        <p>
          In 2026 the discipline has broadened well beyond CI/CD. Teams now talk
          about{' '}
          <a
            href="https://www.gartner.com/en/articles/what-is-platform-engineering"
            target="_blank"
            rel="noreferrer"
            title="What is Platform Engineering?"
          >
            platform engineering
          </a>{' '}
          (building internal developer platforms),{' '}
          <a
            href="https://www.redhat.com/en/topics/devops/what-is-devsecops"
            target="_blank"
            rel="noreferrer"
            title="What is DevSecOps?"
          >
            DevSecOps
          </a>{' '}
          (shifting security left) and measuring delivery performance with the{' '}
          <a
            href="https://dora.dev/"
            target="_blank"
            rel="noreferrer"
            title="DORA metrics"
          >
            DORA metrics
          </a>
          . These are areas I actively follow as the field evolves.
        </p>
      </Card>
      <Card title={titles[1]} blogpost={true}>
        <p>
          <a
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
            href="https://agilemanifesto.org/"
            target="_blank"
            rel="noreferrer"
            title="Manifesto for Agile Software Development"
          >
            The Agile Manifesto
          </a>
          , which was produced in 2001 when a group of 17 developers came
          together at Snowbird, Utah, to find better ways of developing
          software. Since its conception, it has fast become the status quo of
          software development teams across many industries.
        </p>
        <p>
          In an agile team,{' '}
          <a
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
        <Figure
          src={img1}
          alt="Diagram of the five-stage agile cycle: requirements, sprint planning, collaborative design, implementation, then review and monitoring"
          width={1431}
          height={820}
          caption="Agile methodologies: user stories drive everything."
        />
        <p>
          A{' '}
          <a
            href="https://www.atlassian.com/agile/scrum/sprints"
            target="_blank"
            rel="noreferrer"
            title="Scrum Sprints"
          >
            sprint
          </a>{' '}
          is a period within agile used to reach short-term goals while working
          towards long-term aspirations, a sprint typically lasts between one
          and four weeks — most commonly two — depending on the team and will
          have one overarching focus with clearly defined deliverables.
        </p>
        <p>
          A sprint typically begins with a{' '}
          <a
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
      <Card title={titles[2]} blogpost={true}>
        <p>
          Microsoft’s{' '}
          <a
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
            href="https://aws.amazon.com/what-is-aws/"
            target="_blank"
            rel="noreferrer"
            title="What is a AWS?"
          >
            Amazon Web Services
          </a>{' '}
          (AWS) and{' '}
          <a
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
          <code>.YAML</code> files, to set up{' '}
          <a
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
          This YAML document sets out the steps recognised by azure, telling it
          to run each time a commit is made to the{' '}
          <code>/develop</code> or{' '}
          <code>/feature/*</code>{' '}
          branches and the proceeds to build the .NET 6 MVC, run its associated
          tests, if the tests pass, it proceeds to deploy the MVC via the{' '}
          <code>app-uks-dev-01</code> app service.
        </p>
        <p>
          This example uses Azure DevOps Pipelines, but{' '}
          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noreferrer"
            title="What is GitHub Actions?"
          >
            GitHub Actions
          </a>{' '}
          has since become the default CI/CD platform for many teams.
          Infrastructure itself is increasingly defined as code with tools like{' '}
          <a
            href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview"
            target="_blank"
            rel="noreferrer"
            title="What is Bicep?"
          >
            Bicep
          </a>{' '}
          and{' '}
          <a
            href="https://www.terraform.io/"
            target="_blank"
            rel="noreferrer"
            title="What is Terraform?"
          >
            Terraform
          </a>
          , while workloads are commonly packaged into containers and
          orchestrated with{' '}
          <a
            href="https://kubernetes.io/"
            target="_blank"
            rel="noreferrer"
            title="What is Kubernetes?"
          >
            Kubernetes
          </a>
          . These cloud-native and Infrastructure as Code practices are a focus
          of my ongoing learning.
        </p>
      </Card>
    </Post>
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
    
    $content = gc .\\appsettings.json -raw | ConvertFrom-Json
    $content.ConnectionStrings.DefaultConnection=$(SQLDevDbConnString)
    $content | ConvertTo-Json | Set-Content .\\appsettings.json
    
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
      Package: '$(Build.ArtifactStagingDirectory)\\WebApp.zip'`
}
