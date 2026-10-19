import type { IconName } from '../Components/Icons'

export type Topic = {
  path: string
  /** Full name: page titles, the desktop nav, the home shelves. */
  label: string
  /** What fits in the mobile dock under a thumb. */
  short: string
  icon: IconName
  /** One line for the home page's shelf. */
  summary: string
  /** Shown first and full width on the home page, marked as recent work. */
  featured?: boolean
}

export const home: Topic = {
  path: '/',
  label: 'Home',
  short: 'Home',
  icon: 'home',
  summary: 'Who I am and what this site is.',
}

export const topics: Topic[] = [
  {
    path: '/umbraco',
    label: 'Umbraco',
    short: 'Umbraco',
    icon: 'umbraco',
    summary:
      'Umbraco 10 to 17: Block Grid, GOV.UK Frontend for Umbraco, load balancing on Azure, and letting AI agents edit a site safely through MCP.',
    featured: true,
  },
  {
    path: '/dotnet-and-csharp',
    label: '.NET and C#',
    short: '.NET',
    icon: 'braces',
    summary:
      'Repositories, services and dependency injection, a REST API, MVC, NUnit with Moq, and Entity Framework Core.',
  },
  {
    path: '/web-development',
    label: 'Web Development',
    short: 'Web',
    icon: 'atom',
    summary:
      'From HTML, CSS and JavaScript fundamentals to how this React site is built, and the frameworks around it.',
  },
  {
    path: '/devops',
    label: 'DevOps',
    short: 'DevOps',
    icon: 'branch',
    summary:
      'Agile ways of working, Azure DevOps boards and YAML pipelines that build, test and deploy.',
  },
  {
    path: '/machine-learning',
    label: 'Machine Learning',
    short: 'ML',
    icon: 'spark',
    summary:
      'ExRate: forecasting exchange rates with LSTM and FCNN models, served through a .NET API.',
  },
]

export const navItems: Topic[] = [home, ...topics]

export const author = 'Alexander Beesley'

export const socials = [
  {
    href: 'mailto:david.beesley1234@gmail.com',
    label: 'Send email',
    title: 'Email',
    icon: 'mail',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/alexander-beesley-bb1814206/',
    label: 'LinkedIn profile',
    title: 'LinkedIn',
    icon: 'linkedin',
    external: true,
  },
  {
    href: 'https://www.instagram.com/brighton_by_the_sea/',
    label: 'Instagram profile',
    title: 'Instagram',
    icon: 'instagram',
    external: true,
  },
  {
    href: 'https://github.com/AlexBeesley',
    label: 'GitHub profile',
    title: 'GitHub',
    icon: 'github',
    external: true,
  },
] as const satisfies readonly {
  href: string
  label: string
  title: string
  icon: IconName
  external: boolean
}[]

/** Anchor ids for post sections: "Adding a RESTful API" → "adding-a-restful-api". */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/#/g, 'sharp')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
