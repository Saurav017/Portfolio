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
      <section className={classes.main} id="about">
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
                Hello! My name is Saurav Purohit from India and currently I'm in
                my 3rd year of college. I love to solve problems whether it's
                finding the most elegant way to write lines of code or figuring
                out which code fits best into progression.I am committed to
                learning and self-development to achieve better results. I am
                always open to learning and constructive feedback.
                <br></br>
                <br></br>
                Apart from college, I'm into Front End Web
                Development. I create interactive and
                responsive websites and web apps on a daily basis in order me grow
                and learn a ton of new stuff as a developer. My current tech stack in HTML, CSS, JavaScript and React.
                Also I enjoy writing technical blogs on hashnode. I also actively surf the web for new resources 
                out there that definitely helps a lot while working on a project.
                <br></br>
                <br></br>
                Other than that I'm interested in Open Source, Artificial Intelligence, Machine Learning and Web 3.0. 
                My hobbies are playing/watching football, reading blogs and self help books, watching OTT contents. 
              </p>
              <button className={classes.cv}>
                <a href="MyCV.pdf" download="Saurav Purohit.pdf">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection
