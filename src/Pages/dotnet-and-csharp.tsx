import Style from '../Styles/dotnet-and-csharp.module.scss';
import { Card } from "../Components/Cards/card";
import { CodeBox } from "../Components/CodeBox/codebox";

export default function Dotnetandcsharp() {
  return (
    <div>
      <h1 className={Style.mobileHeading}>.NET and C#</h1>
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
        permanent employees with a salary and bonus and temporary employees with
        a day rate and the number of weeks worked stored in a database. This was
        built in{' '}
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