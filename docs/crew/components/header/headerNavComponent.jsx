// import React from 'react'
import logo from '../../assets/shared/logo.svg';
import menu from '../../assets/shared/icon-hamburger.svg';
import './headerNavComponent.css';
import { useRef, useId, useState,  } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavComponent = () => {
  const menu__list = useRef();
  const [lista, setLista] = useState([
    {
      id: 0,
      name: "Home",
      className: 'nav__link',
      to: '/'
    },
    {
      id: 1,
      name: "Destination",
      className: 'nav__link',
      to: '/destination'

    },
    {
      id: 2,
      name: "Crew",
      className: 'nav__link',
      to: '/crew'

    },
    {
      id: 3,
      name: "Technology",
      className: 'nav__link',
      to: '/tech'

    },
  ]);
  const [active, setActive] = useState(lista[0].id);
  const handleList = (e) => {
    e.target.classList.add("hover");
  }
  const removeClass = (e) => {
    e.target.classList.remove("hover");
  }

  const handleMenu = (e) => {
    console.log(menu__list.current.style.height)
    if (menu__list.current?.style?.height == "" || menu__list.current?.style?.height == "0px") {
      menu__list.current.style.height = "14em";
      menu__list.current.style.border = "1px solid #eee";
      return;
    }
    menu__list.current.style.border = "";
    menu__list.current.style.height = 0;
  }

  const handleMenuItems = (e)=>{
    console.log(e)
    // setActive(e);
    // setActive((prev) => prev + e)
  }


  return (
    <>
      <header className="header">
        <figure className="header__figure">
          <img src={logo} alt="logo" className='header__img' />
        </figure>
        <figure className="header__menu" onClick={handleMenu} >
          <img src={menu} alt="logo" className='header__menu__img' id='header__menu' />
        </figure>
        <nav className='nav' id='nav' ref={menu__list}>
          <ul className='nav__list' >
            {
              lista.map((value, i) => (
                <NavLink onClick={() => handleMenuItems(i)} onMouseEnter={handleList} key={value?.id} className={`${value.className} ${ active === i ? 'remove-cursor': ''}`} onMouseLeave={removeClass} to={value.to}>
                  {value.name}</NavLink>
              ))
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default HeaderNavComponent;

