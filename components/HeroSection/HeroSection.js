import Image from 'next/image'
import { Link } from 'react-scroll'
import heroImg from '../../public/images/heroImg.png'
import classes from './HeroSection.module.css'

const HeroSection = () => {
    return (
      <main className={classes.container}>
        <div className={classes.heroDiv}>
            <div className={classes.imgDiv}>
              <Image src={heroImg} alt="heroImg" layout="responsive" objectFit="contain" />
            </div>
          <h2 className={classes.welcome}>Hello</h2>
          <h1 className={classes.title}>
            I am <span className={classes.name}>Saurav</span>
          </h1>
          <p className={classes.description}>
            A Front End Developer passionate to building websites and web
            applications.
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
          >
            <button className={classes.heroBtn}>View My Work</button>
          </Link>
        </div>
      </main>
    );
}

export default HeroSection
