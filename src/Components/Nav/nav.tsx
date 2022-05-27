import Styles from './nav.module.scss';
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
        <div className={Styles.nav}>
          <Link className={Styles.navlink} to="/"> Home </Link>
          <Link className={Styles.navlink} to="/dotnet-and-csharp"> .NET and C# </Link>
          <Link className={Styles.navlink} to="/html-and-css"> HTML and CSS </Link>
          <Link className={Styles.navlink} to="/tpr-wcg"> TPR Web Change Group </Link>
          <Link className={Styles.navlink} to="/demo"> Demo </Link>
          <Link className={Styles.navicon} to="/"> <i className="fa-solid fa-house-user"></i> </Link>
          <Link className={Styles.navicon} to="/dotnet-and-csharp"> <i className="fa-solid fa-code"></i> </Link>
          <Link className={Styles.navicon} to="/html-and-css"> <i className="fa-solid fa-file-code"></i> </Link>
          <Link className={Styles.navicon} to="/tpr-wcg"> <i className="fa-solid fa-briefcase"></i> </Link>
          <Link className={Styles.navicon} to="/demo"> <i className="fa-solid fa-laptop-code"></i> </Link>
        </div>
      </nav>
    )
}