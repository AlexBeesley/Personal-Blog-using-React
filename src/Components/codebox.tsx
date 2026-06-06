import Styles from "../Styles/codebox.module.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBoxProps = {
  children: string;
  language: string;
}

const CodeBox = ({ children, language }: CodeBoxProps) => {
  return (
    <div className={Styles.codebox} aria-label={`Code example in ${language}`}>
      <SyntaxHighlighter className={Styles.highlighter} language={language} style={gruvboxDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBox;