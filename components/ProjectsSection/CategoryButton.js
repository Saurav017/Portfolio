
import classes from './CategoryButton.module.css'

const CategoryButton = ({ filterCategory, handleFilter, id }) => {

    return (
        <div className={classes.container}>
            {filterCategory.map((category, index) => {
                return (
                    <button className={index === id ? classes.categoryBtn + ' ' + classes.active : classes.categoryBtn} type="button" onClick={() => {handleFilter(category)}}>
                        {category}
                    </button>
                )
            })})
        </div>
    )
}

export default CategoryButton
