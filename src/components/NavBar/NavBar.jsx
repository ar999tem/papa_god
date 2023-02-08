import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

const NavBar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' className={(navData) => navData.isActive ? s.activeLink : ''} >Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to='/dialogs' className={(navData) => navData.isActive ? s.activeLink : ''}>Messages</NavLink>
    </div >
    <div className={`${s.item} ${s.active}`}>
      <NavLink to='/users' className={(navData) =>
        navData.isActive ? s.activeLink : ''}>Users</NavLink>
    </div >
    <div className={s.item}>
    </div>
    <div className={s.item}>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default NavBar;