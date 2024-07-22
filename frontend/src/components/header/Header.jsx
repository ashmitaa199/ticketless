import React from 'react';
import {Container, Row, Button} from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import "./header.css";

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/explore',
    display:'Explore'
  },
  {
    path:'/sites',
    display:'Sites'
  }
]

const Header = () => {
  return(
     <header className='header  bg-sky-500/10'>
    <Container className='justify-between items-center'>
      <Row >
        <div className='nav_wrapper flex items-center justify-between  '>
        <div className="logo flex items-center justify-between">
          <img src={logo} alt='logoimg ' className='w-9 h-7 rounded-full '/>
        </div>
        <div className='navigation py-2'>
          <ul class='menu flex flex-row items-center justify-between gap-16'>
            {
              nav__links.map((item,index)=>(
                <li className='nav__item ' key={index}>
                  <NavLink to={item.path} className={navClass=>navClass
                    .isActive ? "active__link":""}>{item.display}</NavLink>
                </li>
              ))}

          </ul>

        </div>
        <div className='nav__right flex  items-center justify-between gap-4  py-0'>
          <div className='nav__btns flex flex-row items-center justify-between gap-1 '>
          <Button className='btn secondary__btn '>
            <Link to='/login'>Login</Link>
          </Button>
          <Button className='btn primary__btn '> 
            <Link to='/register' >Register</Link>
          </Button>
          


          </div>
          <span className='mobile__menu'>
          <i class="ri-menu-line"></i>
          </span>
        </div>

        </div>
      </Row>
    </Container>
  </header>
  )
}

export default Header
