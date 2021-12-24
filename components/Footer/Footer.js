import Link from 'next/link'
import { Link as LinkS } from "react-scroll";
import classes from "./Footer.module.css";
import { BsArrowBarUp } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className={classes.main}>
      <div className={classes.container}>
        <div className={classes.btpContainer}>
          <div className={classes.btpIcon}>
            <LinkS to="home" smooth={true} spy={true} duration={500} offset={0}>
              <BsArrowBarUp />
            </LinkS>
          </div>
          <p>Back To Top</p>
        </div>
        <div className={classes.iconsDiv}>
          <div className={classes.icon}>
            <Link href="https://twitter.com/SauravPurohit4">
              <FaTwitter />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="https://github.com/Saurav017">
              <AiFillGithub />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="https://www.linkedin.com/in/saurav-purohit-b4b739195/">
              <FaLinkedin />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="https://saurav017.hashnode.dev/">
              <SiHashnode />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="https://www.instagram.com/s_a_u_r_av/">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright © {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
