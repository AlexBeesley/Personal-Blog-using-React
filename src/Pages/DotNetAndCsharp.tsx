import Card from '../Components/card'
import Figure from '../Components/Figure'
import CodeBox from '../Components/codebox'
import Post from '../Components/Post'
import img1 from '../Images/SwaggerExample.png'
import img2 from '../Images/LogOutput.png'
import img3 from '../Images/MVC.webp'
import img4 from '../Images/PayCaltests.png'

export default function Dotnetandcsharp() {
  const titles = [
    'Overview',
    'Implementing a Repository Class',
    'Adding Service Logic',
    'Dependency Injection',
    'Adding a RESTful API',
    'Logging using Log4net',
    'Creating a MVC',
    'Testing with NUnit and Moq',
    'Adding Entity Framework Core',
    'Extension Methods',
  ]

  return (
    <Post title=".NET and C#" sections={titles}>
      <Card title={titles[0]} blogpost={true}>
        <p>
          This blog section covers my{' '}
          <a
            href="https://github.com/DABeesleyTPR/PayCal_with_EF_Core"
            target="_blank"
            rel="noreferrer"
            title="My PayCal Repository on GitHub"
          >
            Pay Calculator
          </a>{' '}
          application which holds data for two different types of employees,
          permanent employees with a salary and bonus and temporary employees
          with a day rate and the number of weeks worked stored in a database.
          This was built in{' '}
          <a
            href="https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6"
            target="_blank"
            rel="noreferrer"
            title="What's new in .NET 6"
          >
            .NET 6
          </a>
          , using{' '}
          <a
            href="https://visualstudio.microsoft.com/vs/"
            target="_blank"
            rel="noreferrer"
            title="Visual Studio 2022"
          >
            Visual Studio 2022
          </a>
          , the project demonstrates how a backend service contained within a
          class library is accessed from a{' '}
          <a
            href="https://www.redhat.com/en/topics/api/what-is-a-rest-api"
            target="_blank"
            rel="noreferrer"
            title="What is a RESTful API?"
          >
            RESTful API
          </a>{' '}
          and ASP.NET MVC, with{' '}
          <a
            href="https://docs.microsoft.com/en-us/ef/core/"
            target="_blank"
            rel="noreferrer"
            title="Overview: Entity Framework Core"
          >
            Entity Framework Core
          </a>{' '}
          support for persistent data access, within the same solution.
        </p>
        <p>
          Worth noting in 2026: .NET 6 reached end of support in November 2024,
          so a fresh build would target the current Long Term Support release,{' '}
          <a
            href="https://dotnet.microsoft.com/en-us/download/dotnet/10.0"
            target="_blank"
            rel="noreferrer"
            title="Download .NET 10"
          >
            .NET 10
          </a>{' '}
          (released November 2025). The patterns shown throughout this post —
          repositories, dependency injection, Web APIs and EF Core — carry across
          unchanged, and day-to-day workflows now lean heavily on AI-assisted
          tooling such as GitHub Copilot to move faster.
        </p>
      </Card>
      <Card title={titles[1]} blogpost={true}>
        <p>
          Following the SOLID principles, a Repository Class is used to perform
          basic CRUD (Create, Read, Update and Delete) functionality used
          throughout the projects sub-dependencies.
        </p>
        <p>
          A data model is the foundation of this project, it sets out the fields
          and the expected type of their value pairs, set as properties. As
          there are two employment types which share some fields we can use one
          data model between both as follows:
        </p>
        <CodeBox language={'csharp'}>{post1f1()}</CodeBox>
        <p>
          Which, in the case of the Permanent Employee data model, extends to
        </p>
        <CodeBox language={'csharp'}>{post1f2()}</CodeBox>
        <p>
          Note, the <code>ToString()</code>{' '}
          function which returns the data in a readable format used in the
          console application and was used in various other places throughout
          the solution during development.
        </p>
        <p>
          Let's take a look at the Read function from my volatile Repository
          Class, using inline dummy data for local development, before Entity
          Framework Core integration was added, this solution allowed me as a
          developer to work on the functionality of the Repository Class without
          performing read/write actions on a database. As a result, these values
          are reinitiated each time the program is restarted so no changes are
          preserved.
        </p>
        <CodeBox language={'csharp'}>{post1f3()}</CodeBox>
        <p>
          A lot is going on here, this function takes a string argument for the{' '}
          <code>employeeID</code> field and using
          an if statement, the data set is searched, if the{' '}
          <code>employeeID</code> exists, it then
          searches for the first instance of that ID, as all IDs are uniquely
          generated GUIDs, this works well and returns the correct employee as a{' '}
          <code>PermEmployeeData</code> object,
          returning <code>null</code> otherwise.
        </p>
        <p>
          Next, we need an interface, an interface in .NET is used to manage
          dependencies and allows developers to swap out associated classes
          without breaking places where they are implemented, this let's
          developers build different classes performing the same role, for my
          application this was necessary as when EF Core is added, I can keep
          the Repository Classes with EF Core integration for testing and
          development while using EF Core in production.
        </p>
        <p>Here is the interface for the Repository Classes.</p>
        <CodeBox language={'csharp'}>{post1f4()}</CodeBox>
        <p>
          The <code>IRepository</code> interface
          sets out expected functions and their expected arguments and types.
          All Repository Classes need to implement these functions with these
          exact return types but can return different values based on the code
          within the functions as required.
        </p>
      </Card>
      <Card title={titles[2]} blogpost={true}>
        <p>
          Now that we have a basic Repository Class, we need a service, to the
          class library, to compute the tax and payment calculation. This is the
          foundation of the project and adds the functionality which will be
          invoked across the API and MVC applications.
        </p>
        <p>The code for this is as follows</p>
        <CodeBox language={'csharp'}>{post2f1()}</CodeBox>
        <p>
          This logic calculates the annual income for both types of employees
          based on the current British Income Tax rates. Note, the{' '}
          <code>Read()</code> function from the
          Repository class is called here.
        </p>
      </Card>
      <Card title={titles[3]} blogpost={true}>
        <p>
          In .NET, Dependencies, which allow classes to interact with each
          other, are managed via using statements, then initialised with either
          a new instance or through a constructor. Let's take another look at
          our logic service and learn how it talks to the Repository Class
          though{' '}
          <a
            href="https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection"
            target="_blank"
            rel="noreferrer"
            title="Dependency injection in .NET"
          >
            dependency Injection
          </a>{' '}
          and using statements.
        </p>
        <CodeBox language={'csharp'}>{post3f1()}</CodeBox>
        <p>
          The using statements fetch access to the classes needed in this class,
          from <code>.Models</code> which contain
          our data models and{' '}
          <code>.Repositories</code> which contain
          our repository classes and the repository interface
        </p>
        <p>
          Within the Calculator class, which extends its own interface, the{' '}
          <code>IRepository</code> class and its
          relevant data models are given a variable name, typically starting
          with an underscore as is a soft standard among developers, then
          initialised in the constructor.
        </p>
      </Card>
      <Card title={titles[4]} blogpost={true}>
        <p>
          A RESTful (Representational State Transfer) application programming
          interface provides access to the Pay Calculator service to third
          parties via HTTP endpoints in{' '}
          <a
            href="https://en.wikipedia.org/wiki/JSON"
            target="_blank"
            rel="noreferrer"
            title="JavaScript Object Notation"
          >
            JSON format
          </a>
          . This is a pattern widely used across the web to access data and
          provide utilities to dependant services. This .NET 6 API application
          handles requests and returns relevant{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
            target="_blank"
            rel="noreferrer"
            title="HTTP response status codes"
          >
            HTTP status codes
          </a>{' '}
          and content.
        </p>
        <p>
          Looking at the API{' '}
          <code>Program.cs</code> class, which
          serves as the entry point when the application is executed, it handles
          scoped dependencies such as the class library, logging (which will be
          covered in the next section) and database connection
        </p>
        <CodeBox language={'csharp'}>{post4f1()}</CodeBox>
        <p>
          Here, a <code>builder</code> object is
          created and configured with the appropriate class library
          dependencies, database connection string and then the app, derived
          from <code>builder.Build()</code>, is
          configured and initialised, booting the API service.
        </p>
        <p>
          Let's look at the{' '}
          <code>GetTempEmployees()</code> function
          from the controller for the temporary employee datatype to see how
          requests and handled
        </p>
        <CodeBox language={'csharp'}>{post4f2()}</CodeBox>
        <p>
          The <code>HttpGet()</code> attribute is
          assigned to this function, of type IActionResult from ASP.NET, which
          lets{' '}
          <a
            href="http://www.asp.net/web-api"
            target="_blank"
            rel="noreferrer"
            title="ASP.NET Web API"
          >
            ASP.NET
          </a>{' '}
          know that this function is for a HTTP get request, which would look
          something like{' '}
          <code>https://example/TempEmployee</code>
          , and (provided there is data to return) will return a JSON response
          containing all temporary employees held in the database or class
          library dummy data based on the repository being assigned to the{' '}
          <code>IRepository</code> interface.
        </p>
        <Figure
          src={img1}
          alt="Swagger UI showing a GET request to the temporary employees endpoint and its JSON response"
          width={745}
          height={883}
          caption="A screenshot of the swagger interface, a tool used for local development of ASP.NET APIs, showing the get response for temporary employees."
        />
        <p>
          APIs enable more than just read capabilities, to showcase this let's
          look at how to update an employee entry with new data. The function
          for this is as follows
        </p>
        <CodeBox language={'csharp'}>{post4f3()}</CodeBox>
        <p>
          Here the <code>HttpPut</code> attribute
          is used which takes an ID argument, as a{' '}
          <a
            href="techtarget.com/searchwindowsserver/definition/GUID-global-unique-identifier#:~:text=A%20GUID%20(globally%20unique%20identifier,accounts%2C%20documents%20and"
            target="_blank"
            rel="noreferrer"
            title="What is GUID?"
          >
            GUID
          </a>{' '}
          in this case, from the request, looking something like, this is then
          checked for populated fields, checking for{' '}
          <code>null</code>, then updates the
          employee entry in the relevant fields, this approach enables users to
          only change the fields they wish to without having to input all fields
          each time an update is needed. And again, the ID itself is used to
          check the existence of an employee with that ID, returning a{' '}
          <code>404 Not found</code> response in
          this event or a{' '}
          <code>204 No Content</code> response if
          the employee has been updated successfully.
        </p>
      </Card>
      <Card title={titles[5]} blogpost={true}>
        <p>
          Logging within the context of an API gives multiple benefits.{' '}
          <a
            href="https://logging.apache.org/log4net/index.html"
            target="_blank"
            rel="noreferrer"
            title="Log4net"
          >
            Log4net
          </a>
          , a logging framework for .NET developed by the Apache Software
          Foundation, can be added via the appropriate using statement,
          configured in the{' '}
          <code>log4net.config</code> file, and
          injected in any class using a constructor. Making logging easy to set
          up, outputting at various log levels including{' '}
          <code>INFO</code>,{' '}
          <code>DEBUG</code>,{' '}
          <code>WARN</code> and{' '}
          <code>ERROR</code>. Developers can write
          logs which document events as the code is running. If configured,
          these can be sent to the runtime terminal and even written to a log{' '}
          <code>.txt</code> file. Today most new
          .NET services reach for the built-in{' '}
          <a
            href="https://learn.microsoft.com/en-us/dotnet/core/extensions/logging"
            target="_blank"
            rel="noreferrer"
            title="Logging in .NET"
          >
            Microsoft.Extensions.Logging
          </a>{' '}
          abstraction, often paired with{' '}
          <a
            href="https://serilog.net/"
            target="_blank"
            rel="noreferrer"
            title="Structured logging with Serilog"
          >
            Serilog
          </a>{' '}
          for structured logging, but the principles demonstrated here with
          Log4net are identical.
        </p>
        <p>
          Here is an example, from the{' '}
          <code>PermEmployeeController.cs</code> in
          the API project, of logging in action
        </p>
        <CodeBox language={'csharp'}>{post5f1()}</CodeBox>
        <p>And here is the terminal output</p>
        <Figure
          src={img2}
          alt="API console output with log4net messages highlighted by log level"
          width={1307}
          height={839}
          caption="The API terminal view showing log4net in action, complete with colour coded log levelling."
        />
      </Card>
      <Card title={titles[6]} blogpost={true}>
        <p>
          A Model View Controller is a technology architecture which enables
          HTML Views to be rendered as desired, from with parent views, letting
          developers build closely coupled applications with the power of C#
          baked into the <code>.cshtml</code> file
          format which integrates C# with HTML, to allow for much greater power
          over how data in our applications are displayed. Let’s look to see
          what a <code>.cshtml</code> file is
          capable of.
        </p>
        <CodeBox language={'csharp'}>{post6f1()}</CodeBox>
        <p>
          The Controller part of the MVC format is much the same as for the
          ASP.NET API which we looked at earlier, but this time instead of
          returning HTTP status code, we return our views.
        </p>
        <CodeBox language={'csharp'}>{post6f2()}</CodeBox>
        <p>
          The Model part of MVC refers to the data models used to initialise the
          parameters of a view, let us take a look
        </p>
        <CodeBox language={'csharp'}>{post6f3()}</CodeBox>
        <p> </p>
        <Figure
          src={img3}
          alt="The PayCal MVC demo site listing permanent employees in a table"
          width={1920}
          height={1050}
          caption="A screenshot of the Pay Calculator MVC site running."
        />
      </Card>
      <Card title={titles[7]} blogpost={true}>
        <p>
          Testing in software development is an important part of debugging and
          proving the functionality of a codebase, in .NET these tests can be
          written using an extension called{' '}
          <a
            href="https://nunit.org/"
            target="_blank"
            rel="noreferrer"
            title="What is NUnit?"
          >
            NUnit
          </a>
          . NUnit provides tools which allow for assertions to be made against a
          given function's return value, compared to an expected outcome given
          certain arguments. It is important to use{' '}
          <a
            href="https://www.telerik.com/products/mocking/unit-testing.aspx#:~:text=What%20is%20mocking%3F,or%20state%20of%20external%20dependencies."
            target="_blank"
            rel="noreferrer"
            title="What is Mocking?"
          >
            mocking
          </a>{' '}
          when testing an application with multiple dependencies, to ensure the
          tests aren’t testing the dependencies themselves but only the function
          under test - for this project{' '}
          <a
            href="https://www.nuget.org/packages/Moq/"
            target="_blank"
            rel="noreferrer"
            title="Moq"
          >
            Moq
          </a>
          , which is a{' '}
          <a
            href="https://www.nuget.org/"
            target="_blank"
            rel="noreferrer"
            title="What is NuGet?"
          >
            NuGet
          </a>{' '}
          package, was used. Since 2023, the brief inclusion of the SponsorLink
          dependency in Moq prompted many teams to switch to{' '}
          <a
            href="https://nsubstitute.github.io/"
            target="_blank"
            rel="noreferrer"
            title="NSubstitute mocking library"
          >
            NSubstitute
          </a>{' '}
          or FakeItEasy, and xUnit is now the default test framework in new
          .NET templates — though the mocking and assertion concepts are the same
          whichever you choose.
        </p>
        <p>Here is an example</p>
        <CodeBox language={'csharp'}>{post7f1()}</CodeBox>
        <p>
          The <code>[Test]</code> attribute tells
          NUnit that this is a test to be executed in the test suite; while the{' '}
          <code>_repo.Setup()</code> function
          allows for the mocking of the repository dependency in this MVC
          controller test.
        </p>
        <p>
          This test follows the AAA format, where the{' '}
          <code>Arrange</code> section gathers the
          needed dependencies, the <code>Act</code>{' '}
          section calls the function under test; the{' '}
          <code>Assert</code> section compares the
          results to the hardcoded expected results, defined by the developer.
        </p>
        <Figure
          src={img4}
          alt="Visual Studio Test Explorer with every PayCal NUnit test passing"
          width={1043}
          height={752}
          caption="The Visual Studio 2022 test explorer showing all the Pay Calculator NUnit tests passing."
        />
      </Card>
      <Card title={titles[8]} blogpost={true}>
        <p>
          Database integration is a popular way to implement a persistent data
          storage solution within a project of this kind. Microsoft’s solution
          to this within .NET is{' '}
          <a
            href="https://docs.microsoft.com/en-us/ef/core/"
            target="_blank"
            title="EF Core overview"
          >
            Entity Framework Core
          </a>
          . It allows developers to initialise a{' '}
          <a
            href="https://www.techtarget.com/searchdatamanagement/definition/SQL#:~:text=Structured%20Query%20Language%20(SQL)%20is,on%20the%20data%20in%20them."
            target="_blank"
            title="What is the Structured Query Language?"
          >
            SQL
          </a>{' '}
          Database from their code base and handle CRUD operations from a code
          first perspective, while all the SQL is handled in the background by
          EF Core; allowing Developers to build database dependent applications
          without needing to write a single line of SQL.
        </p>
        <p>
          To establish a DB connection the project must be provided with a
          database connection string via a{' '}
          <code>DBcontext</code> class. Here is
          that class within the Pay Calculator Application.
        </p>
        <CodeBox language={'csharp'}>{post8f1()}</CodeBox>
        <p>
          The connection string is passed through a constructor with the model
          dependencies linked. In Visual Studio, via the Package Manager
          Console, EF Core CLI commands to generate migration scripts and spin
          up a database can be run with{' '}
          <code>
            add-migration [migration name]
          </code>{' '}
          and <code>update-database</code>.
        </p>
        <CodeBox language={'csharp'}>{post8f2()}</CodeBox>
        <p>
          To populate the DB, the{' '}
          <code>ReadAll()</code> method in the
          Repository Class can be passed a{' '}
          <code>.JSON</code> backup file containing
          the data; using an if statement, this data can be injected if the
          database is ever empty.
        </p>
      </Card>
      <Card title={titles[9]} blogpost={true}>
        <p>
          In .NET,{' '}
          <a
            href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods"
            target="_blank"
            title="What is an extension method?"
          >
            extensions
          </a>{' '}
          are used extensively by the community to import functionality to a
          project built by others, but extension methods can also be built
          internally in the correct use case, Let's look at the{' '}
          <code>FriendlyURLs</code> extension built
          for the Pay Calculator MVC.
        </p>
        <p>
          The service provided here is simple, two methods one for converting{' '}
          <code>GUIDs</code> to a shorter format
          and then another to reverse the conversion.
        </p>
        <CodeBox language={'csharp'}>{post9f1()}</CodeBox>
        <p>
          Using the <code>this</code> syntax let's
          these functions be called on objects, like this
        </p>
        <CodeBox language={'csharp'}>{post9f2()}</CodeBox>
      </Card>
    </Post>
  )
}

const post1f1 = () => {
  return `public abstract class EmployeeData
{
    public string EmployeeID { get; set; }
    public string FName { get; set; }
    public string LName { get; set; }
}`
}

const post1f2 = () => {
  return `public class PermEmployeeData : EmployeeData
{
    public int Salaryint { get; set; }
    public int Bonusint { get; set; }

    public override string ToString()
    {
        return $"ID: {EmployeeID} Name: {FName} {LName} Salary: £{Salaryint} Bonus: £{Bonusint}";
    }
}`
}

const post1f3 = () => {
  return `public PermEmployeeData Read(string employeeID)
{
    if (myPermEmployeeData.Any(e => e.EmployeeID == employeeID))
    {
        PermEmployeeData employee = myPermEmployeeData.First(e => e.EmployeeID == employeeID);
        return employee;
    }
    else {
        return null;
    }
}`
}

const post1f4 = () => {
  return `public interface IRepository<T>
{
    T Create(string fname, string lname, int Salary_or_DayRate, int Bonus_or_WeeksWorked);
    IEnumerable<T> ReadAll();
    string GetID(string fname_or_index);
    T Read(string employeeID);
    int Count();
    T Update(string employeeID, string fname, string lname, int Salary_or_DayRate, int Bonus_or_WeeksWorked);
    bool Delete(string employeeID);
}`
}

const post2f1 = () => {
  return `public double CalculateEmployeePay(string employeeID)
{
    var permEmployee = _perm.Read(employeeID);
    
    if (permEmployee is null)
    {
        var tempEmployee = _temp.Read(employeeID);
        income = tempEmployee.WeeksWorkedint * tempEmployee.DayRateint;
    }
    if (permEmployee is not null)
    {
        income = permEmployee.Salaryint + permEmployee.Bonusint;
    }

    double tax = 0;
    if (income <= 18200)
    {
        tax = 0;
    }
    else if (income <= 37000)
    {
        tax = (income - 18200) * 0.19;
    }
    else if (income <= 87000)
    {
        tax = 3572 + (income - 37000) * 0.325;
    }
    else if (income <= 180000)
    {
        tax = 19822 + (income - 87000) * 0.37;
    }
    else
    {
        tax = 54232 + (income - 180000) * 0.45;
    }
    
    return income - tax;
}`
}

const post3f1 = () => {
  return `using PayCal.Models;
using PayCal.Repositories;

namespace PayCal.Services
{
    public class Calculator : ICalculator
    {
        private readonly IRepository<PermEmployeeData> _perm;
        private readonly IRepository<TempEmployeeData> _temp;

        public Calculator(IRepository<PermEmployeeData> perm, IRepository<TempEmployeeData> temp)
        {
            _perm = perm;
            _temp = temp;
        }
. . .
    }
}`
}

const post4f1 = () => {
  return `using Microsoft.EntityFrameworkCore;
using PayCal.DataAccess;
using PayCal.Models;
using PayCal.Repositories;
using PayCal.Repositories.Persistent;
using PayCal.Services;

[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.config")]

var builder = WebApplication.CreateBuilder(args);
string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen( c =>
{
    c.ResolveConflictingActions (apiDescriptions => apiDescriptions.First());
});

builder.Services.AddDbContext<EmployeeContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default"));
});

builder.Services.AddScoped<IRepository<PermEmployeeData>, PermEmployeeRepository>();
builder.Services.AddScoped<IRepository<TempEmployeeData>, TempEmployeeRepository>();
builder.Services.AddScoped<ICalculator, Calculator>();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
`
}

const post4f2 = () => {
  return `[HttpGet()]
public IActionResult GetTempEmployees()
{
    var response = _temp.ReadAll();
    if (response is null) {
        return NoContent();
    }
    else {
        return Ok(response);
    }
}`
}

const post4f3 = () => {
  return `[HttpPut("{ID}")]
public IActionResult UpdateTempEmployee(string ID, string? fname, string? lname, int? dayrate, int? weeksworked)
{
    var read = _temp.Read(ID);
    if (fname is null) { fname = read.FName; }
    if (lname is null) { lname = read.LName; }
    if (dayrate is null) { dayrate = read.DayRateint; }
    if (weeksworked is null) { weeksworked = read.WeeksWorkedint; }

    int notnulldayrate = dayrate ?? read.DayRateint;
    int notnullweeksworked = weeksworked ?? read.WeeksWorkedint;

    var response = _temp.Update(ID, fname, lname, notnulldayrate, notnullweeksworked);
    if (response is null) {
        return NotFound();
    }
    else {
        return NoContent();
    }
}`
}

const post5f1 = () => {
  return `[HttpDelete("{ID}")]
public IActionResult DeletePermEmployee(string ID)
{
    var delete = _perm.Delete(ID);
    if (delete)
    {
        _log.Info($"DELETE: {LogStrings.defaultmsg} {LogStrings.http200}");
        return Ok();
    }
    else
    {
        _log.Warn($"DELETE: {LogStrings.errormsg}{LogStrings.defaultmsg} {LogStrings.http400}{LogStrings.context400}");
        return NotFound();
    }
}`
}

const post6f1 = () => {
  return `@model PayCal_MVC.Models.HomeViewModel
@{
    ViewData["Title"] = "Overview";
    if (Model.permList is null && Model.tempList is null)
    {
        throw new Exception("No data found");
    }
    var notnullPermList = Model.permList ?? new List<PayCal.Models.PermEmployeeData>();
    var notnullTempList = Model.tempList ?? new List<PayCal.Models.TempEmployeeData>();
}

<h2 class="h2Index">Overview</h2>

<form class="searchbox" role="search" asp-controller="Home" asp-action="Search" asp-route-id="searchString" method="get">
    <input required name="searchString" type="search" placeholder="Search..."/>
    <button type="submit" value="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>

<div class="homeCard">
    <h3>Permanent Employees</h3>
    @if (Model.permCount == 0)
    {
        <p>No Permanent Employees found</p>
    }
        
    @if (Model.permCount > 0)
    {
        <div id="outputConsolePerm">
            @foreach (var item in notnullPermList)
            {
                <code>ID: @item.EmployeeID Name: @item.FName @item.LName Salary: @item.Salaryint Bonus: @item.Bonusint</code>
            }
        </div>`
}

const post6f2 = () => {
  return `public IActionResult Index()
{
    _log.Info($"\nGET: {LogStrings.defaultmsg} {LogStrings.http200}");
    return View(new HomeViewModel
    {
        tempCount = _temp.Count(),
        permCount = _perm.Count(),
        tempList = _temp.ReadAll().ToList(),
        permList = _perm.ReadAll().ToList()
    });
}`
}

const post6f3 = () => {
  return `public class HomeViewModel
{
    public int? permCount { get; set; }
    public int? tempCount { get; set; }
    public List<TempEmployeeData>? tempList { get; set;}
    public List<PermEmployeeData>? permList { get; set; }
}`
}

const post7f1 = () => {
  return `[Test]
public void Return_Employees_When_Employees_Is_Called()
{
    // Arrange
    _repo.Setup(repo => repo.ReadAll())
        .Returns(new List<PermEmployeeData>() { new PermEmployeeData(), new PermEmployeeData() });

    // Act
    var response = _sut.GetAllPermEmployees();
    var contentResponse = response as OkObjectResult;
    List<PermEmployeeData> responseAsList = contentResponse.Value as List<PermEmployeeData>;

    // Assert
    Assert.IsInstanceOf<OkObjectResult>(response);
    Assert.AreEqual(responseAsList.Count, 2);
}`
}

const post8f1 = () => {
  return `public class EmployeeContext : DbContext
{
    public EmployeeContext() { }

    private const string connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=PayCalDB;Integrated Security=False;";

    public EmployeeContext(DbContextOptions options) : base(options) { }
    public DbSet<TempEmployeeData>? tempEmployeeDatas { get; set; }
    public DbSet<PermEmployeeData>? permEmployeeDatas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}`
}

const post8f2 = () => {
  return `public IEnumerable<PermEmployeeData> ReadAll()
{
    if (_db.permEmployeeDatas.Count() == 0)
    {
        string file = System.IO.File.ReadAllText("C:/PermMockData.json");
        var employeeData = JsonSerializer.Deserialize<List<PermEmployeeData>>(file);
        _db.permEmployeeDatas.AddRange(employeeData);
        _db.SaveChanges();
    }
    _log.Debug("Real All method accessed.");
    return _db.permEmployeeDatas;
}`
}

const post9f1 = () => {
  return `public static class FriendlyURLs
{
    public static string ToStringFromGuid(this Guid guid)
    {
        return Convert.ToBase64String(guid.ToByteArray())
            .Replace("/", "-")
            .Replace("+", "_")
            .Replace("=", string.Empty);
    }

    public static string ToGuidFromString(this string Str)
    {
        var base64Str = Convert.FromBase64String(Str
            .Replace("-", "/")
            .Replace("_", "+") + "==");
        return new Guid(base64Str);
    }
}`
}

const post9f2 = () => {
  return `Guid x = new Guid();
string y = x.ToStringFromGuid();
Guid z = y.ToGuidFromString();`
}
