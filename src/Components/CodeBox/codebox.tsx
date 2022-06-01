import Styles from "./codebox.module.scss";
import { FunctionComponent } from "react";


type CodeBoxProps = {
  children: React.ReactNode;
  language: string
}

export const CodeBox: FunctionComponent<CodeBoxProps> = ({ children, language }) => {  
  return (
    <>
      <div className={Styles.codebox}>
        <code className="prettyprint">
          {children}
        </code>
      </div>
      <p>Language: {language}</p>
    </>
    );
}