import { useState } from 'react'
import classes from './CategoryButton.module.css'

const CategoryButton = ({ filterCategory, handleFilter }) => {
    
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={classes.container}>
            {filterCategory.map((category, index) => {
                return (
                    <button className={isActive ? classes.categoryBtn + ' ' + classes.active : classes.categoryBtn} type="button" onClick={() => {
                        handleFilter(category)
                        setIsActive(true)
                    }
                    }>
                        {category}
                    </button>
                )
            })})
        </div>
    )
}

export default CategoryButton
