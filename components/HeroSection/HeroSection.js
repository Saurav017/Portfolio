import { Link } from 'react-scroll'
import classes from './HeroSection.module.css'
const HeroSection = () => {
    return (
      <main className={classes.container}>
        <div className={classes.heroDiv}>
          {/* <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#008BC4"
                d="M50.1,-28.5C61,-10,63.2,13.9,53.4,30.2C43.6,46.5,21.8,55.2,-1.7,56.2C-25.1,57.1,-50.3,50.3,-58.3,35C-66.4,19.7,-57.4,-4.1,-44.8,-23.5C-32.2,-42.9,-16.1,-57.8,1.7,-58.8C19.6,-59.8,39.2,-46.9,50.1,-28.5Z"
                transform="translate(100 100)"
              />
            </svg>
            snsfnd
          </div> */}
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
