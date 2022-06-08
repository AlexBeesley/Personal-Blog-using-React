import Styles from "./codebox.module.scss";
import { FunctionComponent } from "react";

type CodeBoxProps = {
  children: React.ReactNode;
}

export const CodeBox: FunctionComponent<CodeBoxProps> = ({ children }) => {
  Loader();
  return (
    <>
      <div className={Styles.codebox}>
        <code className="prettyprint">
          {children}
        </code>
      </div>
    </>
    );
}

function Loader() {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js";
  script.async = true;
  document.body.appendChild(script);
}