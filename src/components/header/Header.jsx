import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-Z6_iC64Xez1-GsAVj7P06jlbwDzFbtCig&usqp=CAU' />
    <div className={s.loginBlock}>
      {props.isAuth ? <div> {props.login} - <button onClick={props.logout}>logout</button> </div>
      :  <NavLink to='/login'>Login</NavLink>}
    </div>
  </header>
}

export default Header;