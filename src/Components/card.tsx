import Styles from "../Styles/card.module.scss";
import { FunctionComponent, useState } from "react";

type CardProps = {
    title: string,
    blogpost?: boolean,
    children?: React.ReactNode,
  }

const Card: FunctionComponent<CardProps> = ({ title, blogpost, children }) => {
  if (blogpost) {
    return (
      <article className={Styles.blogpost}>
        <h2>{title}</h2>
        {children}
      </article>
    );
  }
  return (
    <article className={Styles.card}>
      <h2>{title}</h2>
      {children}
    </article>
    );
}

export default Card;