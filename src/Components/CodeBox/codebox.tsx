import { FunctionComponent } from "react";

type CodeBoxProps = {
    code: string
    language: ["csharp", "html", "css"]
  }

export const CodeBox: FunctionComponent<CodeBoxProps> = ({ code, language }) => {
  return (
    <div className="codebox">
      <p>{code}</p>
      <p>Language: {language}</p>
    </div>
    );
}