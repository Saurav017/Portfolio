import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import {Link as LinkS, animateScroll as scroll} from 'react-scroll' 
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from "./NavAssets";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { VscThreeBars } from 'react-icons/vsc';
import { FaTimes } from "react-icons/fa";
import Logo from '../../public/images/logo.png'

const Navbar = () => {
  const [activeTheme, setActiveTheme] = useState("dark");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
    const [isOpen, setIsOpen] = useState(true);

    const NavMenuOpenHandler = () => {
        setIsOpen((prevState) => !prevState)
    }
  
  const navMenuCloseHandler = () => {
    setIsOpen(true);
    console.log("Clicked");
      
    }  
  
  const themeChangeHandler = () => {
    setActiveTheme(inactiveTheme);
    };
  

  useEffect(() => {
    // persisting to active theme even after refresh
    const savedTheme = window.localStorage.getItem("theme")
    savedTheme && setActiveTheme(savedTheme);
  },[])  


  
  useEffect(() => {
    // using useEffect to set data-theme attribute on the body tag
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem("theme",activeTheme)
  }, [activeTheme])
  
    
  const NavMenuClass = isOpen ? classes.navmenu : classes.navmenu + ' ' + classes.active

  return (
    <nav className={classes.main}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <LinkS
            to='home'
            spy={true}
            smooth={true}
            duration={400}
          offset={0}>
          Saurav
          </LinkS>

        </div>
        <div className={classes.menudiv}>
          <div>
            <ul className={NavMenuClass}>
              <div className={classes.navLinkContainer}>
                {NavLinks.map((link, index) => {
                  return (
                    <li id={index} className={classes.navlink}>
                      {link.title === "Blog" ? (
                        <Link href={link.link}>{link.title}</Link>
                      ) : (
                        <LinkS
                          to={link.link}
                          onClick={navMenuCloseHandler}
                          spy={true}
                          smooth={true}
                          duration={400}
                            offset={-50}
                            activeClass={classes.navlink + ' ' + classes.open}
                        >
                          {link.title}
                        </LinkS>
                      )}
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className={classes.icons}>
            <div className={classes.themeicon} onClick={themeChangeHandler}>
              {activeTheme !== "light" ? <BiSun /> : <BiMoon />}
            </div>
            <div className={classes.menuIcon} onClick={NavMenuOpenHandler}>
              {isOpen ? <VscThreeBars /> : <FaTimes />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
