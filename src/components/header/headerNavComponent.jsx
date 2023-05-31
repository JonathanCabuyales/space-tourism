import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/shared/logo.svg';
import './headerNavComponent.css';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';



const HeaderNavComponent = () => {
  const menu__list = useRef();
  const menu__list__tablet = useRef();
  const line = useRef();
  const [width, setWidth] = useState(0);
  
  const [menuActive, setMenuActive] = useState(false);
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
      to: '/technology'

    },
  ]);
  // let cursor = '';
  // let index = 0;
  let index = parseInt(JSON.parse(localStorage.getItem("index"))) ?? 0;
  // console.log(index);
  const [cursor, setcursor] = useState(index);
  const handleList = (e, i) => {
    e.target.classList.add("hover");
    if (index === i) {
      setcursor(i);
    }

    // cursor = '';
  }
  const removeClass = (e) => {
    e.target.classList.remove("hover");
  }

  const handleMenu = (e) => {
    setMenuActive((prev) => !prev);
    // console.log(menu__list.current.style.height)
    if (menu__list.current?.style?.height == "" || menu__list.current?.style?.height == "0px") {
      menu__list.current.style.height = "14em";
      menu__list.current.style.border = "1px solid #eee";
      return;
    }
    menu__list.current.style.border = "";
    menu__list.current.style.height = 0;
  }

  const handleMenuItems = (e) => {
    localStorage.setItem('index', JSON.stringify(e));
    // setActive((prev) => prev + e)
  }


  return (
    <header className="header">
      <figure className="header__figure">
        <img src={logo} alt="logo" className='header__img' />
      </figure>
      <figure className={menuActive ? 'header__menu--active' : 'header__menu'} onClick={handleMenu} >
        {/* <img src={menuActive ? closeIcon : menu} alt="logo" id='header__menu' /> */}
      </figure>
      <nav className='nav' id='nav' ref={menu__list}>
        <ul className='nav__list' >
          {
            lista.map((value, i) => (
              <Link onClick={() => handleMenuItems(i)} onMouseEnter={(e) => handleList(e, i)} key={value?.id} className={`${value.className} ${cursor === i ? 'remove__cursor' : ''}`} onMouseLeave={removeClass} to={value.to}>
                {value.name}</Link>
            ))
          }
        </ul>
      </nav>
      <nav className='nav--tablet' id='nav--tablet' >
        <ul className='nav__list--tablet' ref={menu__list__tablet}>
          {
            lista.map((value, i) => (
              <NavLink onClick={() => handleMenuItems(i)} onMouseEnter={(e) => handleList(e, i)} key={value?.id} className={`nav__link--tablet ${cursor === i ? 'active--tablet remove__cursor' : ''}`} onMouseLeave={removeClass} to={value.to}>
                {value.name}</NavLink>
            ))
          }
        </ul>
      </nav>
    </header>

  )
}

export default HeaderNavComponent;

