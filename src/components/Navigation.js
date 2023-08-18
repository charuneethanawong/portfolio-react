import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillAppstore } from "react-icons/ai";
import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin, IoMdCall, IoMdMailOpen } from "react-icons/io";
import './Navigation.css'
import { BiSolidContact } from "react-icons/bi";

const Navigation = () => {
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = ()=>setShowMenu(!showMenu)
  return (
    <div className='Navbar'>
        <div className='navbar-toggle'>
            <Link to='#' className='menu-bar'>
                <AiFillAppstore onClick={toggleMenu}/>
            </Link>
          <div className='navbar-toggle'>
          <Link to='https://github.com/charuneethanawong' target='_blank' className='menu-bar-contact'>
                <IoLogoGithub />
            </Link>
            <Link to='http://linkedin.com/in/charunee-thanawong-220045216' target='_blank'className='menu-bar-contact'>
                <IoLogoLinkedin />
            </Link>
            <Link to='/contact' className='menu-bar-contact'>
                <BiSolidContact />
            </Link>
            
            </div> 
            

        </div>
        <nav className= {showMenu ? 'nav-menu active' : 'nav-menu' }>
            <ul className='nav-menu-item'>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bar-arrow'>
                    <IoIosArrowBack onClick={toggleMenu}/>
                    </Link>
                   
                </li>
                <li className='menu-text'>
                    <Link to='/'>HOME</Link>
                </li>
                <li className='menu-text'>
                    <Link to='/myprojects'>My PROJECTS</Link>
                </li>
                <ul className='project'>
                        <li className='pj-list'><Link to='/myprojects/quiz'>QUIZ</Link></li>
                        <li className='pj-list'><Link to='/myprojects/todolist'>Todo List</Link></li>
                        <li className='pj-list'><Link to='/myprojects/imagesearch'>Image Search</Link></li>
                        <li className='pj-list'><Link to='/myprojects/connectbackend'>Create User Connect with Backend</Link></li>

                        </ul>

                
            </ul>
        </nav>
    </div>
  )
}

export default Navigation