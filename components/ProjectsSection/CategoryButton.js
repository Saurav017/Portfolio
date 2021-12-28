import classes from './CategoryButton.module.css'

const CategoryButton = ({filterCategory, handleFilter }) => {
    return (
        <div className={classes.container}>
            {filterCategory.map((category, index) => {
                return (
                    <button className={ classes.categoryBtn} type="button" onClick={() => handleFilter(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default CategoryButton
