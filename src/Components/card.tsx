import Styles from "../Styles/card.module.scss";

type CardProps = {
    title: string,
    blogpost?: boolean,
    children?: React.ReactNode,
  }

const Card = ({ title, blogpost, children }: CardProps) => {
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