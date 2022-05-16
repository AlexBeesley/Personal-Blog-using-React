import React from "react";
import { Card } from "../Components/card";
import { CodeBox } from "../Components/codebox";

function Dotnetandcsharp() {
  return (
    <div>
      <h1>About</h1>
      <p>this is the About Page</p>
      < Card 
          title="Example Code"
          paragraph1="Here is some example code."
          expandable={false} />
      < CodeBox 
          code={`
          public static class FriendlyURLs
          {
              public static string ToStringFromGuid(this string guidStr)
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
              }
          }`}
          language="csharp" />
    </div>
  );
}

export default Dotnetandcsharp;
