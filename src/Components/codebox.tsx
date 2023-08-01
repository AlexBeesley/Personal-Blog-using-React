import Styles from "../Styles/codebox.module.scss";
import { FunctionComponent } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBoxProps = {
  children: string;
  language: string;
}

const CodeBox: FunctionComponent<CodeBoxProps> = ({ children, language }) => {
  return (
    <>
      <div className={Styles.codebox}>
        <SyntaxHighlighter className={Styles.highlighter} language={language} style={gruvboxDark}>
          {children}
        </SyntaxHighlighter>
      </div>
    </>
    );
}

export default CodeBox;