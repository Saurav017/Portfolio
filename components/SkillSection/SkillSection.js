import SectionHeading from '../UI/SectionHeading/SectionHeading'
import classes from './SkillSection.module.css'
import Image from 'next/image'
import html from '../../public/images/html.png'
import css from '../../public/images/CSS.png'
import js from '../../public/images/javascript.png'
import react from '../../public/images/react.png'
import bootstrap from '../../public/images/bootstrap.png'
import tailwind from '../../public/images/tailwind.png'
import sql from '../../public/images/sql.png'
import git from '../../public/images/git.png'
import nodejs from '../../public/images/node.png'
import python from '../../public/images/python.png'
import mondgodb from '../../public/images/mongodb.png'
import cplusplus from '../../public/images/c++.png'
const SkillSection = () => {

  const images = [html, css, js, react,bootstrap, tailwind, sql, git, nodejs, python, mondgodb, cplusplus]

    return (
      <section className={classes.main}>
        <div className={classes.container}>
          <SectionHeading title="Skills" />
          <div className={classes.skillContainer}>
            {images.map(image => {
              return (
              <div className={classes.skill}>
              <Image 
                src={image}
                layout="responsive"
                objectFit='contain'
                alt={image}
                width={100}
                height={100}
              />
            </div>)})}
          </div>
        </div>
      </section>
    );
}

export default SkillSection
