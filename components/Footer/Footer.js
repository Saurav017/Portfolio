import Link from "next/link";
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
            <Link href="#">
              <BsArrowBarUp />
            </Link>
          </div>
          <p>Back To Top</p>
        </div>
        <div className={classes.iconsDiv}>
          <div className={classes.icon}>
            <Link href="#">
              <FaTwitter />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="#">
              <AiFillGithub />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="#">
              <SiHashnode />
            </Link>
          </div>
          <div className={classes.icon}>
            <Link href="#">
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
