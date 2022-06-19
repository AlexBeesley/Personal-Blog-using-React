import { FunctionComponent } from "react";
import Styles from "../Styles/pagecontents.module.scss";

type Props = {
    links: Array<string>;
    titles: Array<string>;
  }

export const PageContents: FunctionComponent<Props> = ({ links, titles }) => {
    return (
        <aside className={Styles.pagecontent}>
            <div className={Styles.toggle}><i className="fa-solid fa-angle-right"></i></div>
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