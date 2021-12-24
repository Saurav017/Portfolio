import {useState} from 'react'
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import classes from './ProjectsSection.module.css'
import { CardData } from '../UI/Card/CardData';
import Card from '../UI/Card/Card';
import CategoryButton from './CategoryButton';


// getting all th categories
const allCategories = ['All', ...new Set(CardData.map(data => data.category))]

const ProjectsSection = () => {

  const [projects, setProjects] = useState(CardData)
  const [filterCategory, setFilterCategory] = useState(allCategories)

  const handleFilter = (button) => {

    if (button === 'All') {
      setProjects(CardData)  
      return;
    } 

    const filteredData = CardData.filter(item => item.category === button)
    setProjects(filteredData)
  }

    return (
      <section className={classes.main} id="projects">
        <div className={classes.container}>
          <SectionHeading title="Projects" />
          <CategoryButton handleFilter={handleFilter} filterCategory={filterCategory} />          
          <div className={classes.projectContainer}>
            {projects.map(card => {
              return (
                <Card
                  id={card.id}
                  title={card.title}
                  category={card.category}
                  description={card.description}
                  sourceCode={card.sourceLink}
                  demoCode={card.demoLink}
                  img={card.image}
                />
                )
              })}
          </div>
        </div>
      </section>
    );
}

export default ProjectsSection
