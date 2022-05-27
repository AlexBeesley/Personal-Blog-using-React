import Styles from './nav.module.scss';
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
        <div className={Styles.nav}>
          <Link className={Styles.navLink} to="/"> Home </Link>
          <Link className={Styles.navLink} to="/dotnet-and-csharp"> .NET and C# </Link>
          <Link className={Styles.navLink} to="/html-and-css"> HTML and CSS </Link>
          <Link className={Styles.navLink} to="/tpr-wcg"> TPR Web Change Group </Link>
          <Link className={Styles.navLink} to="/demo"> Demo </Link>
        </div>
        {/* <div className="nav-mobile">
          <Link className="navlink" to="/"> <i className="fa-solid fa-house-user"></i> </Link>
          <Link className="navlink" to="/dotnet-and-csharp"> <i className="fa-solid fa-code"></i> </Link>
          <Link className="navlink" to="/html-and-css"> <i className="fa-solid fa-file-code"></i> </Link>
          <Link className="navlink" to="/tpr-wcg"> <i className="fa-solid fa-briefcase"></i> </Link>
          <Link className="navlink" to="/demo"> <i className="fa-solid fa-laptop-code"></i> </Link>
        </div> */}
      </nav>
    )
}