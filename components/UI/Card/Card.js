import classes from './Card.module.css';
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
    return (
        <article className={classes.main}>
            <div className={classes.imgContainer}>
                <Image 
                    src={props.img}
                    alt={props.title}
                    layout="responsive"
                    width={100}
                    height={60}
                />
            </div>
            <div className={classes.aboutContainer}>
                <h2 className={classes.title}>{props.title}</h2>
                <p className={classes.description}>{props.description}</p>
                <div className={classes.buttonContainer}>
                    <button className={classes.button}>
                        <Link href={props.sourceCode}>Source Code</Link> 
                    </button>
                    <button className={classes.button}>
                        <Link href={props.demoCode}>Demo</Link> 
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Card