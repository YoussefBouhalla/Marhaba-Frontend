import React from 'react'
import Item from './Item'

function List({meals}) {
  return (
    <div className='meals_list d-flex flex-wrap justify-content-center'>
      {meals.map(meal =>(
        <Item 
            title={meal.title}
            description={meal.description}
            type={meal.type}
            price={meal.price}
         />
      ))}
        
    </div>
  )
}

export default List