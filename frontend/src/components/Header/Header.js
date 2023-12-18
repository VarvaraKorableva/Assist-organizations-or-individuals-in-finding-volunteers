import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
      <header className="header">
        <nav>
            <ul className="header__container">
                <li className="header__item">
                    <Link className="header__item-link" to="/">Main Page</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item-link" to="/volunteers-form">Volunteers</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item-link" to="/companies">Companies</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item-link" to='/volunteers'>All requests for help</Link>
                </li>
            </ul>
        </nav>
        
      </header>
  );
}

export default Header;