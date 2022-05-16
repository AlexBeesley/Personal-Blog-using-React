import { FunctionComponent, useState } from "react";

type CardProps = {
    title: string,
    paragraph1: string
    paragraph2?: string
    paragraph3?: string
    expandable: boolean
  }

export const Card: FunctionComponent<CardProps> = ({ title, paragraph1, paragraph2, paragraph3, expandable }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleExpanded = () => {
      setIsReadMore(!isReadMore);
  }
  var text = paragraph1 + "\n" + (paragraph2 ? paragraph2 : "") + "\n" + (paragraph3 ? paragraph3 : "");
  if (expandable) {
    return (
      <article className="card">
        <h1>{title}</h1>
        <p>
          {isReadMore ? text.slice(0, 180) + "..." : text}
          <span onClick={toggleExpanded} className="card-expanded-toggle">
            {isReadMore ? " \nRead more" : " \nRead less"}
          </span>
        </p>
      </article>
    );
  }

  return (
    <article className="card">
      <h1>{title}</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
    </article>
    );
}