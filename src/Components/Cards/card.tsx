import Styles from "./card.module.scss";
import { FunctionComponent, useState } from "react";

type CardProps = {
    title: string,
    paragraph1: string
    paragraph2?: string
    paragraph3?: string
    expandable: boolean
    children?: React.ReactNode
  }

export const Card: FunctionComponent<CardProps> = ({ title, paragraph1, paragraph2, paragraph3, expandable, children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleExpanded = () => {
      setIsReadMore(!isReadMore);
  }
  var text = paragraph1 + "\n" + (paragraph2 ? paragraph2 : "") + "\n" + (paragraph3 ? paragraph3 : "");
  if (expandable) {
    return (
      <article className={Styles.card}>
        <h1>{title}</h1>
        {children}
        <p>
          {isReadMore ? text.slice(0, 180) + "..." : text}
          <span onClick={toggleExpanded} className={Styles.expanded}>
            {isReadMore ? " \nRead more" : " \nRead less"}
          </span>
        </p>
      </article>
    );
  }

  return (
    <article className={Styles.card}>
      <h1>{title}</h1>
      {children}
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
    </article>
    );
}