import Style from '../Styles/dotnet-and-csharp.module.scss';
import { Card } from "../Components/Cards/card";
import { CodeBox } from "../Components/CodeBox/codebox";
import { PageContents } from "../Components/PageContents/pagecontents";
import img1 from "../Images/SwaggerExample.PNG";

export default function Dotnetandcsharp() {
    const links = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
    const titles = ['Overview', 'Implementing a Repository Class', 'Adding Service Logic', 'Dependency Injection', 'Adding a RESTful API', 'Logging using Log4net'];
  return (
    <div>
      <h1 className={Style.mobileHeading}>.NET and C#</h1>
      <PageContents titles={titles} links={links} />
      <div className={Style.padding}/>
      <a className={Style.anchor} id={links[0]}/>
      <Card title={titles[0]} blogpost={true}>
        <p>
          This blog section covers my{' '}
          <a
            className={Style.inlineLink}
            href="https://github.com/DABeesleyTPR/PayCal_with_EF_Core"
            target="_blank"
            rel="noreferrer"
            title="My PayCal Repository on GitHub"
          >
            Pay Calculator
          </a>{' '}
          application which holds date for two different types of employees,
          permanent employees with a salary and bonus and temporary employees
          with a day rate and the number of weeks worked stored in a database.
          This was built in{' '}
          <a
            className={Style.inlineLink}
            href="https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6"
            target="_blank"
            rel="noreferrer"
            title="What's new in .NET 6"
          >
            .NET 6
          </a>
          , using{' '}
          <a
            className={Style.inlineLink}
            href="https://visualstudio.microsoft.com/vs/"
            target="_blank"
            rel="noreferrer"
            title="Visual Studio 2022"
          >
            Visual Studio 2022
          </a>
          , the project demonstrates a how a backend service contained within a
          class library is accessed from a{' '}
          <a
            className={Style.inlineLink}
            href="https://www.redhat.com/en/topics/api/what-is-a-rest-api"
            target="_blank"
            rel="noreferrer"
            title="What is a RESTful API?"
          >
            RESTful API
          </a>{' '}
          and ASP.NET MVC, with{' '}
          <a
            className={Style.inlineLink}
            href="https://docs.microsoft.com/en-us/ef/core/"
            target="_blank"
            rel="noreferrer"
            title="Overview: Entity Framework Core"
          >
            Entity Framework Core
          </a>{' '}
          support for persistent data access, within the same solution.
        </p>
      </Card>
      <a className={Style.anchor} id={links[1]}/>
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
          Note, the <code className={Style.inlineCode}>ToString()</code>{' '}
          function which returns the data in a readable format used in the
          console application and was used in various other places throughout
          the solution during development.
        </p>
        <p>
          Lets take a look at the Read function from my volatile Repository
          Class, using inline dummy data for local development, before Entity
          Framework Core integration was added, this solution allowed me as a
          developer to work on the functionality of the Repository Class without
          performing read/write actions on a database. As a result, these values
          are reinitiated each time the program is restarted so no changes are
          preserved.
        </p>
        <CodeBox language={'csharp'}>{post1f3()}</CodeBox>
        <p>
          There is a lot going on here, this function takes a string argument
          for the <code className={Style.inlineCode}>employeeID</code> field and
          using an if statement, the data set is searched, if the{' '}
          <code className={Style.inlineCode}>employeeID</code> exists, it then
          searches for the first instance of that ID, as all IDs are uniquely
          generated GUIDs, this works well and returns the correct employee as a{' '}
          <code className={Style.inlineCode}>PermEmployeeData</code> object,
          returning <code className={Style.inlineCode}>null</code> otherwise.
        </p>
        <p>
          Next, we need an interface, an interface in .NET is used to manage
          dependencies and allows developers to swap out associated classes
          without breaking places where they are implemented, this lets
          developers build different classes performing the same roll, for my
          application this was necessary as when EF Core is added, I can keep
          the Repository Classes with EF Core integration for testing and
          development while using EF Core in production.
        </p>
        <p>Here is the interface for the Repository Classes.</p>
        <CodeBox language={'csharp'}>{post1f4()}</CodeBox>
        <p>
          The <code className={Style.inlineCode}>IRepoitory</code> interface
          sets out expected functions and their expected arguments and types.
          All Repository Classes need to implement these functions with these
          exact return types but can return different values based on the code
          within the functions as required.
        </p>
      </Card>
      <a className={Style.anchor} id={links[2]}/>
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
          This logic calculates the annual income for both types of employee
          based on the current British Income Tax rates. Note, the{' '}
          <code className={Style.inlineCode}>Read()</code> function from the
          Repository class is called here.
        </p>
      </Card>
      <a className={Style.anchor} id={links[3]}/>
      <Card title={titles[3]} blogpost={true}>
        <p>
          In .NET, Dependencies, which allow classes to interact with each
          other, are managed via using statements, then initialised with either
          a new instance or through a constructor. Lets take another look at our
          logic service and learn how it talks to the Repository Class though{' '}
          <a
            className={Style.inlineLink}
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
          from <code className={Style.inlineCode}>.Models</code> which contains
          our data models and{' '}
          <code className={Style.inlineCode}>.Repositories</code> which contain
          our repository classes and the repository interface
        </p>
        <p>
          Within the Calculator class, which extends its own interface, the{' '}
          <code className={Style.inlineCode}>IRepositiry</code> class and its
          relevant data model is given a variable name, typically starting with
          an underscore as is a soft standard among developers, then initialised
          in the constructor.
        </p>
      </Card>
      <a className={Style.anchor} id={links[4]}/>
      <Card title={titles[4]} blogpost={true}>
        <p>
          A RESTful (Representational State Transfer) application programming
          interface provides access to the Pay Calculator service to third
          parties via HTTP endpoints in{' '}
          <a
            className={Style.inlineLink}
            href="https://en.wikipedia.org/wiki/JSON"
            target="_blank"
            rel="noreferrer"
            title="JavaScript Object Notation"
          >
            JSON format
          </a>
          . This is a patter widely used across the web to access data and
          provide utilities to dependant services. This .NET 6 API application
          handles requests and returns relevant{' '}
          <a
            className={Style.inlineLink}
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
          <code className={Style.inlineCode}>Program.cs</code> class, which
          serves as the entry-point when the application is executed, it handles
          scoped dependencies such as the class library, logging (which will be
          covered in the next section) and database connection
        </p>
        <CodeBox language={'csharp'}>{post4f1()}</CodeBox>
        <p>
          Here, a <code className={Style.inlineCode}>builder</code> object is
          created and configured with the appropriate class library
          dependencies, database connection string and then app, derived from{' '}
          <code className={Style.inlineCode}>builder.Build()</code>, is
          configured and initialised, booting the API service.
        </p>
        <p>
          Lets look at the{' '}
          <code className={Style.inlineCode}>GetTempEmployees()</code> function
          from the controller for the tempoary employee datatype to see how
          requests and handled
        </p>
        <CodeBox language={'csharp'}>{post4f2()}</CodeBox>
        <p>
          The <code className={Style.inlineCode}>HttpGet()</code> attribute is
          assigned to this function, of type IActionResult from ASP.NET, which
          lets{' '}
          <a
            className={Style.inlineLink}
            href="http://www.asp.net/web-api"
            target="_blank"
            rel="noreferrer"
            title="ASP.NET Web API"
          >
            ASP.NET
          </a>{' '}
          know that this function is for a HTTP get request, which would look
          something like{' '}
          <code className={Style.inlineCode}>https://example/TempEmployee</code>
          , and (provided there is data to return) will return a JSON response
          containing all temporary employees held in the database or class
          library dummy data based on the repository being assigned to the{' '}
          <code className={Style.inlineCode}>IRepository</code> interface.
        </p>
        <img src={img1} />
        <p className={Style.caption}>
          A screenshot of the swagger interface, a tool used for local
          development of ASP.NET APIs, showing the get response for temporary
          employees.
        </p>
        <p>
          APIs enable more than just read capabilities, to showcase this lets
          look at how to update an employee entry with new data. The function
          for this is as follows
        </p>
        <CodeBox language={'csharp'}>{post4f3()}</CodeBox>
        <p>
          Here the <code className={Style.inlineCode}>HttpPut</code> attribute
          is used which takes an ID argument, as a{' '}
          <a
            className={Style.inlineLink}
            href="techtarget.com/searchwindowsserver/definition/GUID-global-unique-identifier#:~:text=A%20GUID%20(globally%20unique%20identifier,accounts%2C%20documents%20and"
            target="_blank"
            rel="noreferrer"
            title="What is GUID?"
          >
            GUID
          </a>{' '}
          in this case, from the request, looking something like{' '}
          <code className={Style.inlineCode}>
            https://example/TempEmployee/182cc1bf-e17b-46ff-b08e-0c6ce3083d10
          </code>
          , this is then checked for populated fields, checking for{' '}
          <code className={Style.inlineCode}>null</code>, then updates the
          employee entry in the relevant fields, this approach enables users to
          only change the fields they wish to without having to input all fields
          each time an update is needed. And again, the ID itself is used to
          check the existence of an employee with that ID, returning a{' '}
          <code className={Style.inlineCode}>404 Not found</code> response in
          this event or a{' '}
          <code className={Style.inlineCode}>204 No Content</code> response if
          the employee has been updated successfully.
        </p>
      </Card>
      <a className={Style.anchor} id={links[5]}/>
      <Card title={titles[5]} blogpost={true}>
        <p>
          Logging within the context of an API gives multiple benefits.{' '}
          <a
            className={Style.inlineLink}
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
          <code className={Style.inlineCode}>log4net.config</code> file, and
          injected in any class using a constructor. Making logging easy to
          setup, outputting at various log levels including{' '}
          <code className={Style.inlineCode}>INFO</code>,{' '}
          <code className={Style.inlineCode}>DEBUG</code>,{' '}
          <code className={Style.inlineCode}>WARN</code> and{' '}
          <code className={Style.inlineCode}>ERROR</code>. Developers can write
          logs which document events as the code is running. If configured,
          these can be sent to the runtime terminal and even written to a log{' '}
          <code className={Style.inlineCode}>.txt</code> file.
        </p>
        <p>
          Here is an example, from the{' '}
          <code className={Style.inlineCode}>PermEmployeeController.cs</code> in
          the API project, of logging in action
        </p>
        <CodeBox language={'csharp'}>{post5f1()}</CodeBox>
        <p>And here is the terminal output</p>
        <img src="src\Images\LogOutput.PNG" />
        <p className={Style.caption}>
          The API terminal view showing log4net in action, complete with
          colour coded log levelling.
        </p>
      </Card>
    </div>
  )
}

const post1f1 = () => {
    return (
`public abstract class EmployeeData
{
    public string EmployeeID { get; set; }
    public string FName { get; set; }
    public string LName { get; set; }
}` 
  );
}

const post1f2 = () => {
  return (
`public class PermEmployeeData : EmployeeData
{
    public int Salaryint { get; set; }
    public int Bonusint { get; set; }

    public override string ToString()
    {
        return $"ID: {EmployeeID} Name: {FName} {LName} Salary: £{Salaryint} Bonus: £{Bonusint}";
    }
}`
  );
}

const post1f3 = () => {
  return (
`public PermEmployeeData Read(string employeeID)
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
  );
}

const post1f4 = () => {
  return (
`public interface IRepository<T>
{
    T Create(string fname, string lname, int Salary_or_DayRate, int Bonus_or_WeeksWorked);
    IEnumerable<T> ReadAll();
    string GetID(string fname_or_index);
    T Read(string employeeID);
    int Count();
    T Update(string employeeID, string fname, string lname, int Salary_or_DayRate, int Bonus_or_WeeksWorked);
    bool Delete(string employeeID);
}`
  );
}

const post2f1 = () => {
  return (
`public double CalculateEmployeePay(string employeeID)
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
  );
}

const post3f1 = () => {
  return (
`using PayCal.Models;
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
  );
}

const post4f1 = () => {
  return (
`using Microsoft.EntityFrameworkCore;
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
  );
}

const post4f2 = () => {
  return (
`[HttpGet()]
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
  );
}

const post4f3 = () => {
  return (
`[HttpPut("{ID}")]
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
}
`
  );
}

const post5f1 = () => {
  return (
`[HttpDelete("{ID}")]
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
);
}

const post5f2 = () => {
  return (
`` 
);
}