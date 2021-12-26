import Image from 'next/image'
import { Link as LinkS }  from 'react-scroll'
import Link from 'next/link'
import heroImg  from '../../public/images/heroImg.png'
import classes from './HeroSection.module.css'
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import MouseScroll from '../UI/Mouse-Scroll/MouseScroll'

const HeroSection = () => {
    return (
      <main className={classes.container}>
        <div className={classes.heroDiv}>
          <div className={classes.iconsDiv}>
            <div className={classes.icon}>
              <Link href="https://twitter.com/SauravPurohit4">
                <FaTwitter />
              </Link>
            </div>
            <div className={classes.icon}>
              <Link href="https://twitter.com/SauravPurohit4">
                <FaLinkedin />
              </Link>
            </div>
            <div className={classes.icon}>
              <Link href="https://twitter.com/SauravPurohit4">
                <AiFillGithub />
              </Link>
            </div>
          </div>
        <div className={classes.imgContainer}>
          <Image
            src={heroImg}
            alt="heroImg"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <div className={classes.textDiv}>
          <h2 className={classes.welcome}>Hello,</h2>
          <h1 className={classes.title}>
            I am <span className={classes.name}>Saurav</span>
          </h1>
          <p className={classes.description}>
            A Front End Developer passionate to building websites and web
            applications.
          </p>
          <LinkS
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <button className={classes.heroBtn}>
              <span className={classes.sendSpan}>View My Work</span>
            </button>
          </LinkS>
          </div>
          </div>  
        <MouseScroll />
      </main>
    );
}

export default HeroSection