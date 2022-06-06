import Style from '../Styles/dotnet-and-csharp.module.scss';
import { Card } from "../Components/Cards/card";
import { CodeBox } from "../Components/CodeBox/codebox";

function Dotnetandcsharp() {
  return (
    <div>
      <h1 className={Style.mobileHeading}>.NET and C#</h1>
      <h3>Learning Blog documenting my programming experience with .NET with C#</h3>
      < Card 
          title="Example Code"
          paragraph1="Here is some example code."
          expandable={false} >
        <CodeBox
            language="HTML">{demo1()}</CodeBox>
      </Card>
    </div>
  );
}

const demo1 = () => {
    return (
      <>
        &lt;html&gt;<br/>
        &lt;body&gt;<br/>
        <br/>
        &lt;h1&gt;Testing an HTML Syntax Highlighter&lt;/h2&gt;<br/>
        &lt;p&gt;Hello world!&lt;/p&gt;<br/>
        &lt;a href="https://www.w3schools.com"&gt;Back to School&lt;/a&gt;<br/>
        <br/>
        &lt;/body&gt;<br/>
        &lt;/html&gt;<br/>
      </>
    );
}

export default Dotnetandcsharp;
