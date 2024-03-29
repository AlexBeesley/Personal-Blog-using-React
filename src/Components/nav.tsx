import Styles from '../Styles/nav.module.scss';
import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
        <div className={Styles.nav}>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/"> Home </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/dotnet-and-csharp"> .NET and C# </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/web-development"> Web Development </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/devops"> DevOps </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/machine-learning"> Machine Learning </NavLink>

          <NavLink title="Home" className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/"> <i className="fa-solid fa-house-user"></i> </NavLink>
          <NavLink title=".NET and C#"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/dotnet-and-csharp"> <i className="fa-solid fa-code"></i> </NavLink>
          <NavLink title="Web Development"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/web-development"> <i className="fa-solid fa-atom"></i> </NavLink>
          <NavLink title="DevOps"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/devops"> <i className="fa-solid fa-code-branch"></i> </NavLink>
          <NavLink title="Machine Learning"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/machine-learning"> <i className="fa-solid fa-robot"></i> </NavLink>
        </div>
      </nav>
    )
}