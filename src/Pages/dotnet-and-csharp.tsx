import Style from '../Styles/dotnet-and-csharp.module.scss';
import { Card } from "../Components/Cards/card";
import { CodeBox } from "../Components/CodeBox/codebox";

export default function Dotnetandcsharp() {
  return (
    <div>
      <h1 className={Style.mobileHeading}>.NET and C#</h1>
      <Card title="Overview" blogpost={true}>
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
      <Card title="Implementing a Repository Class" blogpost={true}>
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
      <Card title="Adding Service Logic" blogpost={true}>
        <p>
          Now that we have a basic Repository Class, we need a service, to the
          class library, to compute the tax and payment calculation. This is the
          foundation of the project and adds the functionality which will be
          invoked across the API and MVC applications.
        </p>
        <p>The code for this is as follows</p>
        <CodeBox language={'csharp'}>{post1f5()}</CodeBox>
        <p>
          This logic calculates the annual income for both types of employee
          based on the current British Income Tax rates. Note, the{' '}
          <code className={Style.inlineCode}>Read()</code> function from the
          Repository class is called here.
        </p>
      </Card>
      <Card title="Dependency Injection" blogpost={true}>
        <p>
          In .NET, Dependencies, which allow classes to interact with each
          other, are managed via using statements, then initialised with either
          a new instance or through a constructor. Lets take another look at our
          logic service and learn how it talks to the Repository Class though
          <a
            href="https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection"
            target="_blank"
            rel="noreferrer"
            title="Dependency injection in .NET"
          >
            dependency Injection
          </a>
          and using statements.
        </p>
        <CodeBox language={'csharp'}>{post1f6()}</CodeBox>
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

const post1f5 = () => {
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

const post1f6 = () => {
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