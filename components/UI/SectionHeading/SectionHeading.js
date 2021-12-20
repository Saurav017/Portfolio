import classes from './Section.module.css'

const SectionHeading = (props) => {
    return (
        <div className={classes.main}>
            <h1 className={classes.heading}>{ props.title}</h1>            
        </div>
    )
}

export default SectionHeading
