import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { NavLinks } from "./NavAssets";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { VscThreeBars } from 'react-icons/vsc';
import { FaTimes } from "react-icons/fa";
import Layout from "../UI/Layout/Layout";

const Navbar = () => {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
    const [isOpen, setIsOpen] = useState(true);

    const NavMenuOpenHandler = () => {
        setIsOpen((prevState) => !prevState)
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
          <Link href="/">Saurav Purohit</Link>
        </div>
        <div className={classes.menudiv}>
          <div>
            <ul className={NavMenuClass}>
              {NavLinks.map((link, index) => {
                return (
                  <li id={index} className={classes.navlink}>
                    <Link href={link.link}>{link.title}</Link>
                  </li>
                );
              })}
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
