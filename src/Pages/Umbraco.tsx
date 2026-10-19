import Style from '../Styles/pages.module.css'
import Card from '../Components/card'
import CodeBox from '../Components/codebox'
import Icon from '../Components/Icons'
import Post from '../Components/Post'

export default function Umbraco() {
  const titles = [
    'Overview',
    'Block Grid in Umbraco 10',
    'GOV.UK Frontend for Umbraco',
    'Load balancing on Azure',
    'Umbraco 17 and AI agents',
  ]

  return (
    <Post title="Umbraco" sections={titles}>
      <Card title={titles[0]} blogpost={true}>
        <p>
          <a
            href="https://umbraco.com/"
            target="_blank"
            rel="noreferrer"
            title="What is Umbraco?"
          >
            Umbraco
          </a>{' '}
          is an open-source content management system built on .NET, and it
          has become a big part of my work at The Pensions Regulator. I first
          met it during my placement, alongside Sitecore, and I have since
          worked across three of its long-term support releases: Umbraco 10,
          Umbraco 13 and, most recently, Umbraco 17 on .NET 10.
        </p>
        <p>
          Much of that work sits on top of the{' '}
          <a
            href="https://design-system.service.gov.uk/"
            target="_blank"
            rel="noreferrer"
            title="GOV.UK Design System"
          >
            GOV.UK Design System
          </a>
          : editors build pages from blocks in the Umbraco backoffice, and the
          code behind each block makes sure it renders consistent, accessible
          markup whatever an editor puts in it.
        </p>
        <p>
          This section covers a demo I built when the Block Grid editor was
          new, my contributions to The Pensions Regulator&rsquo;s open-source
          GOV.UK Frontend package for Umbraco, what I have learnt about running
          Umbraco load balanced on Azure, and my most recent project: letting
          AI agents edit an Umbraco 17 site safely, through Umbraco&rsquo;s
          Developer MCP server.
        </p>
      </Card>

      <Card title={titles[1]} blogpost={true}>
        <p>
          The Block Grid editor lets editors lay out a page themselves. To try
          it out I built a small{' '}
          <a
            href="https://github.com/AlexBeesley/Umbraco10_Block_Grid_Demo"
            target="_blank"
            rel="noreferrer"
            title="Umbraco 10 Block Grid demo on GitHub"
          >
            Umbraco 10 site
          </a>{' '}
          with two kinds of block. Layout blocks define <em>areas</em> &ndash;
          two columns, three columns, or a two-thirds and one-third split
          &ndash; and content blocks drop into those areas: a headline, rich
          text, an image, a video or a form.
        </p>
        <p>
          Each block is rendered by its own Razor partial, so a layout block
          has very little to do. It renders its areas, and Umbraco renders
          whatever the editor has placed in each one:
        </p>
        <CodeBox language={'razor'}>{post1f1()}</CodeBox>
        <p>
          The page template then renders the whole grid with a single call,{' '}
          <code>@Html.GetBlockGridHtml(Model, &quot;blockGrid&quot;)</code>.
        </p>
        <p>
          In the backoffice, custom views gave editors a preview of each block
          rather than a grey placeholder. In Umbraco 10 those were AngularJS
          templates. Umbraco 14 replaced the AngularJS backoffice with one
          built on web components, so the same idea is now a Lit element
          written in TypeScript, which is how the block previews in the GOV.UK
          package below are built.
        </p>
      </Card>

      <Card title={titles[2]} blogpost={true}>
        <p>
          The Pensions Regulator maintains an open-source package,{' '}
          <a
            href="https://github.com/thepensionsregulator/govuk-frontend-aspnetcore-extensions"
            target="_blank"
            rel="noreferrer"
            title="govuk-frontend-aspnetcore-extensions on GitHub"
          >
            govuk-frontend-aspnetcore-extensions
          </a>
          , published on NuGet as{' '}
          <a
            href="https://www.nuget.org/packages/ThePensionsRegulator.GovUk.Frontend.Umbraco"
            target="_blank"
            rel="noreferrer"
            title="ThePensionsRegulator.GovUk.Frontend.Umbraco on NuGet"
          >
            ThePensionsRegulator.GovUk.Frontend.Umbraco
          </a>
          . It builds on{' '}
          <a
            href="https://github.com/x-govuk/govuk-frontend-aspnetcore"
            target="_blank"
            rel="noreferrer"
            title="ASP.NET Core MVC tag helpers for GOV.UK Design System"
          >
            James Gunn&rsquo;s tag helpers
          </a>{' '}
          for GOV.UK Frontend, adds client-side validation, and lets editors
          build GOV.UK components such as inset text, summary lists, warning
          text and notification banners entirely from Umbraco blocks. It has
          two release lines, one for Umbraco 13 and one for Umbraco 17, so a
          fix made on one line is usually brought across to the other.
        </p>
        <p>
          I have contributed to it since 2023, starting with bringing its radio
          buttons in line with TPR&rsquo;s design system. More recently:
        </p>
        <ul>
          <li>
            <strong>Tables on small screens.</strong> Wide tables of figures do
            not adapt well to a phone, so I added a &ldquo;Download table data
            (CSV)&rdquo; button beneath each GOV.UK table, giving people another
            way to read the data. It is a progressive enhancement: with
            JavaScript the file is built in the browser, and without it a form
            posts the table to a server endpoint that returns the same file.
          </li>
          <li>
            <strong>Making it robust.</strong> Later fixes made both paths
            produce identical files for tables with merged cells, by expanding{' '}
            <code>colspan</code> and <code>rowspan</code> into a rectangular
            grid; stopped buttons appearing twice or not at all; and let the
            endpoint work on sites with a global authorisation policy, where
            the no-JavaScript download had been answered with a 403.
          </li>
          <li>
            <strong>Accessible video.</strong> Embedded YouTube videos now have
            descriptive labelling and consistent screen reader support.
          </li>
          <li>
            <strong>Smaller fixes and releases:</strong> FAQ search results with
            more than one call to action, heading classes on the search
            component, clearing security advisories from dependencies, and
            version bumps for releases.
          </li>
        </ul>
        <p>
          The CSV file is named after the table&rsquo;s{' '}
          <code>&lt;caption&gt;</code>, starts with a byte-order mark so Excel
          reads it as UTF-8, and escapes every value following{' '}
          <a
            href="https://datatracker.ietf.org/doc/html/rfc4180"
            target="_blank"
            rel="noreferrer"
            title="RFC 4180: Common Format for CSV Files"
          >
            RFC 4180
          </a>
          , with a guard against CSV injection, where a cell beginning with{' '}
          <code>=</code> or <code>+</code> would otherwise run as a formula
          when the file is opened:
        </p>
        <CodeBox language={'javascript'}>{post2f1()}</CodeBox>
        <div className={Style.actions}>
          <a
            className="btn btn--secondary"
            href="https://github.com/thepensionsregulator/govuk-frontend-aspnetcore-extensions/blob/develop/docs/components/tpr-table-csv-download.md"
            target="_blank"
            rel="noreferrer"
            title="Table CSV download documentation"
          >
            Table CSV download docs
            <Icon name="external" size={16} />
          </a>
        </div>
      </Card>

      <Card title={titles[3]} blogpost={true}>
        <p>
          A busy public site is often split in two: a public front end that
          scales out, and a backoffice where editors work, all sharing one
          database. Umbraco supports this with <em>server roles</em>. Exactly
          one instance should be the <code>SchedulingPublisher</code>, which
          runs scheduled publishing and other background tasks; every other
          instance is a <code>Subscriber</code>, which keeps its cache in step
          with the changes editors make in the backoffice. By default Umbraco elects these
          roles itself, using the <code>umbracoServer</code> table in the
          shared database.
        </p>
        <p>
          On Azure App Service, with deployment slots and frequent restarts, an
          automatic election can pick an instance you did not intend, such as
          a staging slot. Umbraco&rsquo;s load-balancing guidance is to take
          that decision yourself by registering your own{' '}
          <code>IServerRoleAccessor</code>. This one reads an explicit role
          from configuration, and otherwise falls back to whether the instance
          serves the backoffice:
        </p>
        <CodeBox language={'csharp'}>{post3f1()}</CodeBox>
        <p>
          It replaces Umbraco&rsquo;s own registrar through a composer:
        </p>
        <CodeBox language={'csharp'}>{post3f2()}</CodeBox>
        <p>
          I packaged this as a{' '}
          <a
            href="https://github.com/AlexBeesley/Umbraco-Support-CodeReview"
            target="_blank"
            rel="noreferrer"
            title="Umbraco support code review on GitHub"
          >
            minimal, sanitised reproduction
          </a>{' '}
          for a code review with Umbraco Support: the few files involved, with
          real hostnames replaced, and the questions we needed answering.
        </p>
      </Card>

      <Card title={titles[4]} blogpost={true}>
        <p>
          My most recent project is a{' '}
          <a
            href="https://github.com/AlexBeesley/Umbraco_MCP_Demo"
            target="_blank"
            rel="noreferrer"
            title="Umbraco MCP demo on GitHub"
          >
            proof of concept
          </a>{' '}
          for letting AI agents edit an Umbraco site, safely. It pairs Umbraco
          17 on .NET 10 with the GOV.UK package above and uSync, and connects
          them to the{' '}
          <a
            href="https://docs.umbraco.com/umbraco-cms/reference/developer-mcp"
            target="_blank"
            rel="noreferrer"
            title="Umbraco Developer MCP documentation"
          >
            Umbraco Developer MCP
          </a>{' '}
          server. The{' '}
          <a
            href="https://modelcontextprotocol.io/"
            target="_blank"
            rel="noreferrer"
            title="What is the Model Context Protocol?"
          >
            Model Context Protocol
          </a>{' '}
          lets assistants such as GitHub Copilot, Claude or ChatGPT call
          Umbraco&rsquo;s Management API as tools.
        </p>
        <p>
          The interesting part is not the AI but the permissions. The agent
          signs in as an Umbraco <em>API user</em>, which cannot log in to the
          backoffice and can only exchange client credentials for a token. Its
          user group starts at the Home page and has Read, Create, Update and
          Publish, and nothing else: no delete, move, unpublish or permissions.
          Anything outside that returns a 403 from Umbraco itself, which is
          the real security boundary. The tool list is trimmed too, from more
          than 500 tools to the 56 needed for pages and document types, which
          also keeps GitHub Copilot under its limit on tools per request.
        </p>
        <p>
          This is the server&rsquo;s entry in VS Code&rsquo;s MCP configuration,
          trimmed to the essentials:
        </p>
        <CodeBox language={'json'}>{post4f1()}</CodeBox>
        <p>
          One gotcha worth sharing: the MCP SDK switches off TLS certificate
          checks for its whole process unless <code>NODE_ENV</code> is{' '}
          <code>production</code>. Rather than accept that, the configuration
          sets <code>NODE_ENV=production</code> and trusts the exported
          ASP.NET Core development certificate instead.
        </p>
        <p>
          Asked in plain English to create and publish a content page under
          Home, the agent lists the document types, creates the page, publishes
          it and returns its URL, and the demo script checks that the new page
          really is served.
        </p>
        <p>
          The project can also run as a public demo. The site runs on Azure App
          Service and a remote MCP server runs as a Cloudflare Worker, so
          anyone can add its URL to Claude, ChatGPT, Microsoft 365 Copilot or
          VS Code and sign in through the browser with OAuth. Everyone shares a
          demo editor account that can create and edit drafts but never
          publish, delete or change document types, so nothing anyone writes
          goes live; the site resets that account&rsquo;s password if someone
          changes it, and clears its unpublished pages after 24 hours. Because
          the demo is not a government service it also switches off the GOV.UK
          crown, logotype and typeface, which are reserved for services on
          GOV.UK, and every page is checked against WCAG 2.2 AA with axe-core.
        </p>
        <div className={Style.actions}>
          <a
            className="btn btn--secondary"
            href="https://github.com/AlexBeesley/Umbraco_MCP_Demo"
            target="_blank"
            rel="noreferrer"
            title="Umbraco MCP demo on GitHub"
          >
            Project repository
            <Icon name="external" size={16} />
          </a>
        </div>
      </Card>
    </Post>
  )
}

const post1f1 = () => {
  return String.raw`@using Umbraco.Extensions
@inherits Umbraco.Cms.Web.Common.Views.UmbracoViewPage<Umbraco.Cms.Core.Models.Blocks.BlockGridItem>

<div class="two-col-container">
    @await Html.GetBlockGridItemAreasHtmlAsync(Model)
</div>`
}

const post2f1 = () => {
  return String.raw`export function escapeCsvValue(value) {
    if (!value) return "";

    // CSV injection mitigation: prefix formula-triggering characters
    if (/^[=+\-@\t\r]/.test(value)) {
        value = "'" + value;
    }

    // RFC 4180: quote fields containing comma, double-quote, or newline
    if (/[,"\n\r]/.test(value)) {
        return '"' + value.replace(/"/g, '""') + '"';
    }
    return value;
}`
}

const post3f1 = () => {
  return `public sealed class ConfigurableServerRoleAccessor : IServerRoleAccessor
{
    public ServerRole CurrentServerRole { get; }

    public ConfigurableServerRoleAccessor(
        IConfiguration configuration,
        IOptions<AppConfig> appConfig,
        ILogger<ConfigurableServerRoleAccessor> logger)
    {
        var configuredRole = configuration.GetValue<string>("Umbraco:CMS:Hosting:ServerRole");

        if (!string.IsNullOrWhiteSpace(configuredRole) &&
            Enum.TryParse<ServerRole>(configuredRole, ignoreCase: true, out var role) &&
            role != ServerRole.Unknown)
        {
            CurrentServerRole = role;
            logger.LogInformation("Server role explicitly configured as {ServerRole}.", CurrentServerRole);
        }
        else
        {
            CurrentServerRole = appConfig.Value.EnableBackoffice
                ? ServerRole.SchedulingPublisher
                : ServerRole.Subscriber;

            logger.LogInformation(
                "No explicit server role configured. Determined role as {ServerRole} based on EnableBackoffice={EnableBackoffice}.",
                CurrentServerRole,
                appConfig.Value.EnableBackoffice);
        }
    }
}`
}

const post3f2 = () => {
  return `public sealed class ServerRoleComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.SetServerRegistrar<ConfigurableServerRoleAccessor>();
    }
}`
}

const post4f1 = () => {
  return `"umbraco": {
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@umbraco-cms/mcp-dev@17.6.11"],
  "env": {
    "UMBRACO_BASE_URL": "https://localhost:44398",
    "UMBRACO_CLIENT_ID": "umbraco-back-office-mcp",
    "UMBRACO_CLIENT_SECRET": "\${input:umbraco-client-secret}",
    "UMBRACO_INCLUDE_TOOL_COLLECTIONS": "document,document-type",
    "NODE_ENV": "production",
    "NODE_EXTRA_CA_CERTS": "\${workspaceFolder}/.certs/localhost-dev-cert.pem"
  }
}`
}
