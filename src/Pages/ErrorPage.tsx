import { useEffect } from 'react';
import Styles from "../Styles/main.module.scss";

function ErrorPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={Styles.error}>
      <p><i className="fa-solid fa-bug"></i> 404: Page not found</p>
      <div className={Styles.spacer}></div>
    </div>
  );
}

export default ErrorPage;
