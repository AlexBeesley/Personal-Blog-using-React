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
        <CodeBox language={'csharp'} >{demo1()}</CodeBox>
      </Card>
    </div>
  );
}

const demo1 = () => {
    return (

`public static string ToStringFromGuid(this string guidStr)
{
    Guid guid = new Guid(guidStr);
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
    return new Guid(base64Str).ToString();
}`
      
    );
}

export default Dotnetandcsharp;