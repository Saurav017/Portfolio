import classes from './MouseScroll.module.css'
import {Link} from 'react-scroll'

const MouseScroll = () => {
    return (
      <div className={classes.mouseScroll}>
          <div className={classes.mouse}>
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