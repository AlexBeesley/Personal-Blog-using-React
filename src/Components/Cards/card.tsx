import Styles from "./card.module.scss";
import { FunctionComponent, useState } from "react";

type CardProps = {
    title: string,
    blogpost?: boolean,
    children?: React.ReactNode
  }

export const Card: FunctionComponent<CardProps> = ({ title, blogpost, children }) => {
  if (blogpost) {
    return (
      <div className={Styles.blogpost}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
  return (
    <article className={Styles.card}>
      <h1>{title}</h1>
      {children}
    </article>
    );
}