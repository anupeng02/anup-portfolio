import React from "react"
import { useState } from "react";
import {Link} from "react-router-dom"
import {FaBars, FaReact } from "react-icons/fa";
import {HiX} from "react-icons/hi"
import './styles.css'
const data = [
    {
        label : "HOME",
        to : "/"
    },
    {
        label : "ABOUT",
        to : "/about"
    },
    {
        label : "CONTACT",
        to : "/contact"
    },
    {
        label : "SKILLS",
        to : "/skills"
    },
    {
        label : "PORTFOLIO",
        to : "/portfolio"
    },
    {
        label : "RESUME",
        to : "/resume"
    }
]
const Navbar = ()=>{

    const [toggleIcon, setToggle] = useState(false)

    function handleToggleIcon(){
             setToggle(!toggleIcon)
    }
    return(
        <div>
             <nav className="navbar">
                    <div className="navbar__container">
                        <Link  to={"/"} className="navbar__container__logo">
                           <FaReact size={30}/>
                        </Link>
                    </div>
                    <ul className={`navbar-container-menu ${toggleIcon ? 'active': ''}`}>
                        {
                            data.map((item, index)=>{
                                return(
                                    <li key={index} className="navbar-container-menu-items">
                                      <Link className="navbar-container-menu-items-links" to={item.to}> 
                                           {item.label}
                                      </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="nav-icons" onClick={handleToggleIcon}>
                          {toggleIcon? <HiX size={30}/> : <FaBars size={30}/>}
                    </div>
             </nav>
        </div>
    )
}

export default Navbar