import React from 'react'
import classes from './Recipes.module.css'

const Recipes = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes['receipe-card']}>
        <h2 className={classes['receipe-card__title']}>Baked Salmon with fennel & tomatoes</h2>
        <div className={classes['receipe-card__img']}>
          <img src="https://www.themealdb.com/images/media/meals/1548772327.jpg" alt="receipe-img" />
        </div>
        <div className={classes['receipe-card__body']}>
          <div className={classes['receipe-card__infos']}>
            <ul>
              <li><p>Category: Seafood</p></li>
              <li><p>Origin: British</p></li>
            </ul>
          </div>
          <div className={classes['receipe-card__ingredients']}>
            <h4>Ingredients</h4>
            <ul>
              <li>Fennel</li>
              <li>Parsley</li>
              <li>Lemon</li>
              <li>Cherry Tomatoes</li>
              <li>Olive Oil</li>
              <li>Salmon</li>
              <li>Black Olives</li>
            </ul>
          </div>
          <div className={classes['receipe-card__instructions']}>
            <button>View Receipe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes