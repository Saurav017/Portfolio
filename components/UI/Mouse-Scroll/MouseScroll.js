import classes from './MouseScroll.module.css'
import {animateScroll, Link} from 'react-scroll'

const MouseScroll = () => {

  const scrollTo = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    })
}

    return (
      <div className={classes.mouseScroll}>
        <div className={classes.mouse} onClick={scrollTo}>
            <div className={classes.wheel}></div>
            <div>
              <span className={`${classes.scrollArrows} ${classes.one}`}></span>
              <span className={`${classes.scrollArrows} ${classes.two}`}></span>
              <span
                className={`${classes.scrollArrows} ${classes.three}`}
              ></span>
            </div>
          </div>
        </div>
    );
}

export default MouseScroll;