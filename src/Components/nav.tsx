import Styles from '../Styles/nav.module.scss';
import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
        <div className={Styles.nav}>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/"> Home </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/dotnet-and-csharp"> .NET and C# </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/html-and-css"> HTML and CSS </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/devops"> DevOps </NavLink>
          <NavLink className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to="/demo"> Demo </NavLink>

          <NavLink title="Home" className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/"> <i className="fa-solid fa-house-user"></i> </NavLink>
          <NavLink title=".NET and C#"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/dotnet-and-csharp"> <i className="fa-solid fa-code"></i> </NavLink>
          <NavLink title="HTML and CSS"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/html-and-css"> <i className="fa-brands fa-html5"></i> </NavLink>
          <NavLink title="DevOps"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/devops"> <i className="fa-solid fa-code-branch"></i> </NavLink>
          <NavLink title="Demo"className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to="/demo"> <i className="fa-solid fa-laptop-code"></i> </NavLink>
        </div>
      </nav>
    )
}