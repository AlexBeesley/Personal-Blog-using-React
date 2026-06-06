import Styles from '../Styles/nav.module.scss';
import { NavLink } from "react-router-dom";

const navItems = [
  { path: '/', label: 'Home', icon: 'fa-solid fa-house-user' },
  { path: '/dotnet-and-csharp', label: '.NET and C#', icon: 'fa-solid fa-code' },
  { path: '/web-development', label: 'Web Development', icon: 'fa-solid fa-atom' },
  { path: '/devops', label: 'DevOps', icon: 'fa-solid fa-code-branch' },
  { path: '/machine-learning', label: 'Machine Learning', icon: 'fa-solid fa-robot' },
];

export default function Nav () {
    return (
        <nav>
        <div className={Styles.nav}>
          {navItems.map(({ path, label, icon }) => (
            <NavLink key={path} className={({ isActive }) => (isActive ? Styles.activelink : Styles.navlink)} to={path}> {label} </NavLink>
          ))}

          {navItems.map(({ path, label, icon }) => (
            <NavLink key={`icon-${path}`} title={label} className={({ isActive }) => (isActive ? Styles.activeicon : Styles.navicon)} to={path}>
              <i className={icon} aria-hidden="true"></i>
            </NavLink>
          ))}
        </div>
      </nav>
    )
}