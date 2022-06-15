import { FunctionComponent } from "react";
import Styles from "./pagecontents.module.scss";

type Props = {
    links: Array<string>;
    titles: Array<string>;
  }

export const PageContents: FunctionComponent<Props> = ({ links, titles }) => {
    return (
        <aside className={Styles.pagecontent}>
            <h1>Page Contents</h1>
            <ul className="pagecontent__list">
                {titles.map((titles, index) => (
                    <li className={Styles.list} key={index}>
                        <a href={'#'+links[index]}>{titles}</a>
                    </li>
                ))}
            </ul>
        </aside>
      );
  }