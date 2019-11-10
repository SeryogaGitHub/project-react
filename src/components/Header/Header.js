import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  const {auth, login, logout} = props;
  return (
    <header className={s.main_header}>
      <div className={s.logo}>
        <img src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt=""/>
      </div>
      {auth
        ? <div>{login} | <button onClick={logout}>Розлогінитися</button></div>
        : <div>
            <NavLink to={'/login'}>Логін</NavLink>
          </div>
      }

    </header>
  );
};

export default Header;

