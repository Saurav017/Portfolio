import Link from "next/link";
import axios from 'axios'
import fileDownload from 'js-file-download'
import Image from "next/image"
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import classes from './AboutSection.module.css'
import myImage from '../../public/images/hc.jpg'

const AboutSection = () => {


  const saveFileHandler = (url, filename) => {
    axios.get(url, {
      responseType: 'blob'
    }) .then((res) => {
      fileDownload(res.data, filename)
    })
  }

    return (
      <section className={classes.main} id='about'>
        <div className={classes.container}>
          <SectionHeading title="About" />
          <div className={classes.about}>
            <div className={classes.imageContainer}>
              <Image
                src={myImage}
                alt="My-Pic"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.aboutContainer}>
              <p className={classes.description}>
                Hello! My name is Saurav Purohit. I am a self taught web
                developer and I am very passionate about building new things so
                I create interactive and responsive webpages on a daily basis
                using HTML, CSS and Javascript.
                            <br></br>
                            <br></br>
                            I am committed to learning and self-development to
                achieve better results. I am always open to challenges and
                constructive feedback. I want to become a team player and
                dedicate all my skills and talents to develop high-quality and
                unique things.
                        </p>
                        <button className={classes.cv}>
                <a href="MyCV.pdf" download="Saurav Purohit.pdf">Download CV</a>
              </button>
            </div>
          </div>
          </div>
      </section>
    );
}

export default AboutSection
